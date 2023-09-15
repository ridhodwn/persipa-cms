<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        newsItem: Object,
        tagsObj: Object
    },
    data() {
        return {
            ntForm: {
                id: 0,
                tagId: 0
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'deleteNewsById',
            'fetchNewsById',
            'deleteNewsTag',
            'addNewsTag'
        ]),
        deleteNewsByIdComp(id) {
            this.deleteNewsById(id)
        },
        deleteNewsTagComp(id) {
            this.deleteNewsTag(id)
        },
        buttonAction(id) {
            this.fetchNewsById(id)
        },
        ntSubmitHandler(id) {
            this.addNewsTag(
                {
                    tagId: this.ntForm.tagId
                },
                id
            )
            this.ntForm.tagId = 0
        },
        clearForm() {
            this.ntForm.tagId = 0
        }
    },
    computed: {
        formatDate() {
            let dateNew = new Date(this.newsItem.date)
            const formattedDate = dateNew.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            return formattedDate
        },
        countComments() {
            return this.newsItem.Comments.length
        },
        replaceVidUrl() {
            return this.newsItem.vidUrl.replace('watch?v=', 'embed/')
        }
    }
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ newsItem.id }}</td>
        <td>{{ newsItem.title }}</td>
        <td>{{ newsItem.subtitle }}</td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#contentModal${newsItem.id}`"
            >
                See Content
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#multimediaModal${newsItem.id}`"
            >
                See Multimedia
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#quoteModal${newsItem.id}`"
            >
                See Quote
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#authorModal${newsItem.id}`"
            >
                See Author
            </button>
        </td>
        <td class="text-center">{{ formatDate }}</td>
        <td class="text-center">{{ newsItem.views }}</td>
        <td class="text-center">{{ countComments }}</td>
        <td class="text-center">{{ newsItem.Category.name }}</td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#tagModal${newsItem.id}`"
            >
                See Tags
            </button>
        </td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(newsItem.id)"
                href=""
                class="bi bi-pencil-fill me-2 text-primary"
            ></a>
            <a
                @click.prevent="deleteNewsByIdComp(newsItem.id)"
                href=""
                class="bi bi-trash-fill text-danger"
            ></a>
        </td>
    </tr>

    <!-- CONTENT MODAL -->
    <div
        class="modal fade"
        :id="`contentModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="contentModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="contentModalLabel">
                        Content News {{ newsItem.id }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover my-2 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center">Snippet</th>
                                <th scope="col" class="text-center">Content 1</th>
                                <th scope="col" class="text-center">Content 2</th>
                                <th scope="col" class="text-center">Content 3</th>
                                <th scope="col" class="text-center">Content 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="content">{{ newsItem.snippet }}</td>
                                <td class="content">{{ newsItem.content1 }}</td>
                                <td class="content">{{ newsItem.content2 }}</td>
                                <td class="content">{{ newsItem.content3 }}</td>
                                <td class="content">{{ newsItem.content4 }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- MULTIMEDIA MODAL -->
    <div
        class="modal fade"
        :id="`multimediaModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="multimediaModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="multimediaModalLabel">
                        Multimedia News {{ newsItem.id }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover my-2 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" width="350px" class="text-center">Image 1</th>
                                <th scope="col" width="350px" class="text-center">Image 2</th>
                                <th scope="col" class="text-center">video</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img :src="newsItem.imgUrl1" class="img-fluid rounded-1" />
                                </td>
                                <td>
                                    <img :src="newsItem.imgUrl2" class="img-fluid rounded-1" />
                                </td>
                                <td class="text-center">
                                    <iframe width="350" height="225" :src="replaceVidUrl"> </iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- QUOTE MODAL -->
    <div
        class="modal fade"
        :id="`quoteModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="quoteModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="quoteModalLabel">
                        Quote News {{ newsItem.id }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover my-2 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Quote</th>
                                <th scope="col">Person</th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ newsItem.quote }}</td>
                                <td>{{ newsItem.quotePerson }}</td>
                                <td>{{ newsItem.quotePersonPos }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- AUTHOR MODAL -->
    <div
        class="modal fade"
        :id="`authorModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="authorModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="authorModalLabel">
                        Author News {{ newsItem.id }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover my-2 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" width="100px">Name</th>
                                <th scope="col" width="150px">About</th>
                                <th scope="col" width="100px">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ newsItem.author }}</td>
                                <td>{{ newsItem.authorAbout }}</td>
                                <td>
                                    <img :src="newsItem.authorImgUrl" class="img-fluid rounded-1" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- NEWS TAG MODAL -->
    <div
        class="modal fade"
        :id="`tagModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="tagModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="tagModalLabel">Tags News {{ newsItem.id }}</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="modal-tags mb-3">
                        <div
                            v-for="tag in newsItem.NewsTags"
                            :key="tag.id"
                            class="d-flex me-2 border rounded-pill px-2 py-1 mb-2"
                        >
                            <p class="mb-0">{{ tag.Tag.name }}</p>
                            <a
                                @click.prevent="deleteNewsTagComp(tag.id)"
                                href=""
                                class="bi bi bi-x-lg text-danger ms-2"
                            ></a>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-warning rounded-lg add-act-btn ms-2"
                        data-bs-toggle="modal"
                        :data-bs-target="`#tagFormModal${newsItem.id}`"
                    >
                        Add Tag
                    </button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- NEWS TAG FORM MODAL -->
    <div
        class="modal fade"
        :id="`tagFormModal${newsItem.id}`"
        tabindex="-1"
        aria-labelledby="tagFormModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="tagFormModalLabel">
                        Add Tag News {{ newsItem.id }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="ntSubmitHandler(newsItem.id)">
                    <div class="modal-body my-2">
                        <div class="d-flex align-items-center px-auto">
                            <div class="col px-2">
                                <div class="ps-3 mb-2">
                                    <label for="tag"><b>Tag</b></label>
                                </div>
                                <select
                                    v-model="ntForm.tagId"
                                    class="form-select py-1"
                                    aria-label="Position select"
                                    id="tag"
                                >
                                    <option value="0" selected disabled>-- Select Tag --</option>
                                    <option
                                        v-for="tag in tagsObj.tags"
                                        :key="tag.id"
                                        :value="tag.id"
                                    >
                                        {{ tag.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#tagModal${newsItem.id}`"
                            @click.prevent="clearForm"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#tagModal${newsItem.id}`"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scped>
tr {
    font-size: 15px;
}

.activity-btn {
    font-size: 15px;
}

.about-cell {
    height: 250px;
    overflow: auto;
}

.sub-header {
    font-size: 12px;
}

.add-act-btn {
    font-size: 14px;
    font-weight: 500;
    color: white;
}

.flag-img {
    height: 20px;
    border: 1px solid #989898;
}

.gmap-iframe {
    max-width: 300px;
    overflow: auto;
}

.highlight-url {
    max-width: 150px;
    overflow: auto;
}

.content {
    font-size: 13px;
}

.modal-tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 0;
}
</style>
