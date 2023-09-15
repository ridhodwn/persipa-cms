<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        news: Object,
        newsFormType: String,
        categoriesObj: Object,
        tagsObj: Object
    },
    data() {
        return {
            newsForm: {
                id: this.news.id ? this.news.id : 0,
                title: this.news.title ? this.news.title : '',
                subtitle: this.news.subtitle ? this.news.subtitle : '',
                snippet: this.news.snippet ? this.news.snippet : '',
                views: this.news.views ? this.news.views : 0,
                date: this.news.date ? this.news.date : '',
                content1: this.news.content1 ? this.news.content1 : '',
                content2: this.news.content2 ? this.news.content2 : '',
                content3: this.news.content3 ? this.news.content3 : '',
                content4: this.news.content4 ? this.news.content4 : '',
                imgUrl1: this.news.imgUrl1 ? this.news.imgUrl1 : '',
                imgUrl2: this.news.imgUrl2 ? this.news.imgUrl2 : '',
                vidUrl: this.news.vidUrl ? this.news.vidUrl : '',
                quote: this.news.quote ? this.news.quote : '',
                quotePerson: this.news.quotePerson ? this.news.quotePerson : '',
                quotePersonPos: this.news.quotePersonPos ? this.news.quotePersonPos : '',
                author: this.news.author ? this.news.author : '',
                authorImgUrl: this.news.authorImgUrl ? this.news.authorImgUrl : '',
                authorAbout: this.news.authorAbout ? this.news.authorAbout : '',
                categoryId: this.news.categoryId ? this.news.categoryId : 0
            },
            newsTagForm: [
                {
                    id: 1,
                    tagId: 0
                }
            ]
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addNews', 'editNews']),
        submitHandler() {
            if (this.newsFormType === 'add-news') {
                this.addNews({
                    title: this.newsForm.title,
                    subtitle: this.newsForm.subtitle,
                    snippet: this.newsForm.snippet,
                    views: this.newsForm.views,
                    date: this.newsForm.date,
                    content1: this.newsForm.content1,
                    content2: this.newsForm.content2,
                    content3: this.newsForm.content3,
                    content4: this.newsForm.content4,
                    imgUrl1: this.newsForm.imgUrl1,
                    imgUrl2: this.newsForm.imgUrl2,
                    vidUrl: this.newsForm.vidUrl,
                    quote: this.newsForm.quote,
                    quotePerson: this.newsForm.quotePerson,
                    quotePersonPos: this.newsForm.quotePersonPos,
                    author: this.newsForm.author,
                    authorImgUrl: this.newsForm.authorImgUrl,
                    authorAbout: this.newsForm.authorAbout,
                    categoryId: this.newsForm.categoryId,
                    NewsTags: this.newsTagForm
                })
            } else {
                this.editNews(
                    {
                        title: this.newsForm.title,
                        subtitle: this.newsForm.subtitle,
                        snippet: this.newsForm.snippet,
                        views: this.newsForm.views,
                        date: this.newsForm.date,
                        content1: this.newsForm.content1,
                        content2: this.newsForm.content2,
                        content3: this.newsForm.content3,
                        content4: this.newsForm.content4,
                        imgUrl1: this.newsForm.imgUrl1,
                        imgUrl2: this.newsForm.imgUrl2,
                        vidUrl: this.newsForm.vidUrl,
                        quote: this.newsForm.quote,
                        quotePerson: this.newsForm.quotePerson,
                        quotePersonPos: this.newsForm.quotePersonPos,
                        author: this.newsForm.author,
                        authorImgUrl: this.newsForm.authorImgUrl,
                        authorAbout: this.newsForm.authorAbout,
                        categoryId: this.newsForm.categoryId
                    },
                    this.newsForm.id
                )

                this.newsForm.title = ''
                this.newsForm.subtitle = ''
                this.newsForm.snippet = ''
                this.newsForm.views = 0
                this.newsForm.date = ''
                this.newsForm.content1 = ''
                this.newsForm.content2 = ''
                this.newsForm.content3 = ''
                this.newsForm.content4 = ''
                this.newsForm.imgUrl1 = ''
                this.newsForm.imgUrl2 = ''
                this.newsForm.vidUrl = ''
                this.newsForm.quote = ''
                this.newsForm.quotePerson = ''
                this.newsForm.quotePersonPos = ''
                this.newsForm.author = ''
                this.newsForm.authorImgUrl = ''
                this.newsForm.authorAbout = ''
                this.newsForm.categoryId = 0
            }
        },
        cancelAction() {
            this.$router.push(`/news`)

            this.newsForm.title = ''
            this.newsForm.subtitle = ''
            this.newsForm.snippet = ''
            this.newsForm.views = 0
            this.newsForm.date = ''
            this.newsForm.content1 = ''
            this.newsForm.content2 = ''
            this.newsForm.content3 = ''
            this.newsForm.content4 = ''
            this.newsForm.imgUrl1 = ''
            this.newsForm.imgUrl2 = ''
            this.newsForm.vidUrl = ''
            this.newsForm.quote = ''
            this.newsForm.quotePerson = ''
            this.newsForm.quotePersonPos = ''
            this.newsForm.author = ''
            this.newsForm.authorImgUrl = ''
            this.newsForm.authorAbout = ''
            this.newsForm.categoryId = 0
        },
        handleAdd(id) {
            this.newsTagForm = [
                ...this.newsTagForm,
                {
                    id: id + 1,
                    tagId: 0
                }
            ]
        },
        handleSubstract() {
            if (this.newsTagForm.length > 1) {
                this.newsTagForm.pop()
            }
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="newsFormType === 'add-news'" class="my-3">
                <h2 class="m-0">Add News</h2>
                <hr />
            </div>
            <div v-if="newsFormType === 'edit-news'" class="my-3">
                <h2 class="m-0">Edit News</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="newsTitle" class="form-label col-3 m-0">Title</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.title"
                                type="text"
                                class="form-control"
                                id="newsTitle"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="subtitle" class="form-label col-3 m-0">Subtitle</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.subtitle"
                                type="text"
                                class="form-control"
                                id="subtitle"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="matchDate" class="form-label col-3 m-0">Date</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.date"
                                type="date"
                                class="form-control"
                                id="matchDate"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="snippet" class="form-label col-3 mb-0 mt-2">Snippet</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.snippet"
                                class="form-control"
                                id="snippet"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="content1" class="form-label col-3 mb-0 mt-2">Content 1</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.content1"
                                class="form-control"
                                id="content1"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="content2" class="form-label col-3 mb-0 mt-2">Content 2</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.content2"
                                class="form-control"
                                id="content2"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="content3" class="form-label col-3 mb-0 mt-2">Content 3</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.content3"
                                class="form-control"
                                id="content3"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="content4" class="form-label col-3 mb-0 mt-2">Content 4</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.content4"
                                class="form-control"
                                id="content4"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="imgUrl1" class="form-label col-3 m-0">Image URL 1</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.imgUrl1"
                                type="text"
                                class="form-control"
                                id="imgUrl1"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="imgUrl2" class="form-label col-3 m-0">Image URL 2</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.imgUrl2"
                                type="text"
                                class="form-control"
                                id="imgUrl2"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="vidUrl" class="form-label col-3 m-0">Video URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.vidUrl"
                                type="text"
                                class="form-control"
                                id="vidUrl"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex justify-content-left mb-3 col-12 mx-auto">
                        <label for="quote" class="form-label col-3 mb-0 mt-2">Quote</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.quote"
                                class="form-control"
                                id="quote"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="quotePerson" class="form-label col-3 m-0">Quote Person</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.quotePerson"
                                type="text"
                                class="form-control"
                                id="quotePerson"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="quotePersonPos" class="form-label col-3 m-0"
                            >Quote Person Pos</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.quotePersonPos"
                                type="text"
                                class="form-control"
                                id="quotePersonPos"
                            />
                        </div>
                    </div>
                    <div class="mb-4 mt-5 col-12 mx-auto">
                        <h5>AUTHOR</h5>
                        <hr class="col-2" />
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="author" class="form-label col-3 m-0">Author</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.author"
                                type="text"
                                class="form-control"
                                id="author"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="authorImgUrl" class="form-label col-3 m-0"
                            >Author Picture</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="newsForm.authorImgUrl"
                                type="text"
                                class="form-control"
                                id="authorImgUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-left mb-3 col-12 mx-auto">
                        <label for="authorAbout" class="form-label col-3 mb-0 mt-2">About</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="newsForm.authorAbout"
                                class="form-control"
                                id="authorAbout"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="category" class="form-label col-3 m-0">Category</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <select
                                v-model="newsForm.categoryId"
                                class="form-select py-1"
                                aria-label="Position select"
                                id="tag"
                            >
                                <option value="0" selected disabled>-- Select Tag --</option>
                                <option
                                    v-for="category in categoriesObj.categories"
                                    :key="category.id"
                                    :value="category.id"
                                >
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Button Trigger News Tag Modal -->
                    <button
                        v-if="newsFormType === 'add-news'"
                        type="button"
                        class="btn btn-warning btn-add-pa"
                        data-bs-toggle="modal"
                        data-bs-target="#newsTagModal"
                    >
                        Add Tags
                    </button>
                    <!-- End Button Trigger -->
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3 me-5">
                <button
                    @click.prevent="cancelAction"
                    type="button"
                    class="btn btn-secondary me-2 btn-action"
                >
                    CANCEL
                </button>
                <button type="submit" class="btn btn-primary ms-2 me-2 btn-action">SUBMIT</button>
            </div>
        </form>
    </section>

    <!-- NEWS TAG MODAL -->
    <div
        class="modal fade"
        id="newsTagModal"
        tabindex="-1"
        aria-labelledby="ntModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="ntModalLabel">Input News Tags</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-center form-header">
                        <div class="col px-2">
                            <div class="d-flex justify-content-start mb-2">
                                <label for="newsTag"><b>Tag</b></label>
                            </div>
                        </div>
                    </div>
                    <div v-for="newsTag in newsTagForm" :key="newsTag.id" class="d-flex mt-2 mb-2 col-12">
                        <div class="d-flex align-items-center px-auto col-8">
                            <div class="col-12 px-2">
                                <select
                                    v-model="newsTag.tagId"
                                    class="form-select py-1"
                                    aria-label="Tag select"
                                    id="newsTag"
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
                        <div class="d-flex align-items-end ms-1 mb-1 col-4">
                            <button
                                class="btn btn-success me-1 btn-pa-handler"
                                type="button"
                                @click.prevent="handleAdd(newsTag.id)"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                            <button
                                class="btn btn-danger btn-pa-handler"
                                type="button"
                                @click.prevent="handleSubstract()"
                            >
                                <b><i class="bi bi-dash-lg"></i></b>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

label {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.colon {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.input-right {
    text-align: right;
}

.btn-add-pa {
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: white;
    letter-spacing: 0.25px;
    margin-top: 11px;
}

.btn-action {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 170px;
}

.btn-pa-handler {
    width: 30px;
    height: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.form-header {
    padding-right: 68px;
}
</style>
