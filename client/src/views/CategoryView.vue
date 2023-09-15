<script>
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    data() {
        return {
            ctgFormType: '',
            formType: '',
            categoryForm: {
                id: 0,
                name: ''
            },
            tagForm: {
                id: 0,
                name: ''
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'fetchCategories',
            'deleteCategory',
            'addCategory',
            'editCategory',
            'fetchTags',
            'deleteTag',
            'addTag',
            'editTag'
        ]),
        backAction() {
            this.$router.push(`/news`)
        },
        deleteCategoryComp(id) {
            this.deleteCategory(id)
        },
        deleteTagComp(id) {
            this.deleteTag(id)
        },
        editActionCtg(category) {
            this.categoryForm.id = category.id
            this.categoryForm.name = category.name
        },
        editActionTag(tag) {
            this.tagForm.id = tag.id
            this.tagForm.name = tag.name
        },
        addAction(type) {
            if (type === 'add-category') {
                this.formType = 'add-category'
            } else {
                this.formType = 'add-tag'
            }
        },
        addSubmitHandler() {
            if (this.formType === 'add-category') {
                this.addCategory({
                    name: this.categoryForm.name
                })
            } else {
                this.addTag({
                    name: this.tagForm.name
                })
            }
        },
        ctgSubmitEdit(id) {
            this.editCategory(
                {
                    name: this.categoryForm.name
                },
                id
            )

            this.tagForm.id = 0
            this.tagForm.name = ''
        },
        tagSubmitEdit(id) {
            this.editTag(
                {
                    name: this.tagForm.name
                },
                id
            )

            this.categoryForm.id = 0
            this.categoryForm.name = ''
        },
        clearForm() {
            this.categoryForm.id = 0
            this.categoryForm.name = ''
            this.tagForm.id = 0
            this.tagForm.name = ''
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['categoriesObj', 'tagsObj'])
    },
    created() {
        this.fetchTags()
        this.fetchCategories()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <button
            @click.prevent="backAction"
            type="button"
            class="btn btn-warning rounded-lg small-button mb-2"
        >
            Back to News
        </button>
        <div class="d-flex col-12">
            <div class="col-6 pe-4">
                <div class="mt-4 d-flex justify-content-between mb-2">
                    <h2 class="m-0">CATEGORIES</h2>
                    <div>
                        <button
                            @click.prevent="addAction('add-category')"
                            type="button"
                            class="btn btn-success rounded-lg"
                            data-bs-toggle="modal"
                            :data-bs-target="`#addFormModal`"
                        >
                            Add Category
                        </button>
                    </div>
                </div>
                <hr />
                <div class="tbl-container border border-secondary border-opacity-25">
                    <table class="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" width="70px" class="text-center">#</th>
                                <th scope="col">Name</th>
                                <th scope="col" width="100px" class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-for="category in categoriesObj.categories" :key="category.id">
                            <tr>
                                <td scope="row" class="fw-bold text-center">
                                    {{ category.id }}
                                </td>
                                <td>{{ category.name }}</td>
                                <td>
                                    <a
                                        @click.prevent="editActionCtg(category)"
                                        href=""
                                        class="bi bi-pencil-fill me-3 text-primary"
                                        data-bs-toggle="modal"
                                        :data-bs-target="`#categoryFormModal${category.id}`"
                                    ></a>
                                    <a
                                        @click.prevent="deleteCategoryComp(category.id)"
                                        href=""
                                        class="bi bi-trash-fill text-danger"
                                    ></a>
                                </td>
                            </tr>
                            <!-- EDIT CATEGORY FORM MODAL -->
                            <div
                                class="modal fade"
                                :id="`categoryFormModal${category.id}`"
                                tabindex="-1"
                                aria-labelledby="ctgFormModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="ctgFormModalLabel">
                                                Edit Category
                                            </h1>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <form @submit.prevent="ctgSubmitEdit(category.id)">
                                            <div class="modal-body my-2">
                                                <div class="d-flex align-items-center px-auto">
                                                    <div class="col px-2">
                                                        <div
                                                            class="d-flex justify-content-center mb-2"
                                                        >
                                                            <label for="ctgName"><b>Name</b></label>
                                                        </div>
                                                        <input
                                                            v-model="categoryForm.name"
                                                            class="form-control py-1"
                                                            type="text"
                                                            id="ctgName"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                    @click.prevent="clearForm"
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-6 ps-4">
                <div class="mt-4 d-flex justify-content-between mb-2">
                    <h2 class="m-0">TAGS</h2>
                    <div>
                        <button
                            @click.prevent="addAction('add-tag')"
                            type="button"
                            class="btn btn-success rounded-lg"
                            data-bs-toggle="modal"
                            :data-bs-target="`#addFormModal`"
                        >
                            Add Tag
                        </button>
                    </div>
                </div>
                <hr />
                <div class="tbl-container border border-secondary border-opacity-25">
                    <table class="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" width="70px" class="text-center">#</th>
                                <th scope="col">Name</th>
                                <th scope="col" width="100px" class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-for="tag in tagsObj.tags" :key="tag.id">
                            <tr>
                                <td scope="row" class="fw-bold text-center">{{ tag.id }}</td>
                                <td>{{ tag.name }}</td>
                                <td>
                                    <a
                                        @click.prevent="editActionTag(tag)"
                                        href=""
                                        class="bi bi-pencil-fill me-3 text-primary"
                                        data-bs-toggle="modal"
                                        :data-bs-target="`#tagFormModal${tag.id}`"
                                    ></a>
                                    <a
                                        @click.prevent="deleteTagComp(tag.id)"
                                        href=""
                                        class="bi bi-trash-fill text-danger"
                                    ></a>
                                </td>
                            </tr>
                            <!-- EDIT TAG FORM MODAL -->
                            <div
                                class="modal fade"
                                :id="`tagFormModal${tag.id}`"
                                tabindex="-1"
                                aria-labelledby="tagFormModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="tagFormModalLabel">
                                                Edit Tag
                                            </h1>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <form @submit.prevent="tagSubmitEdit(tag.id)">
                                            <div class="modal-body my-2">
                                                <div class="d-flex align-items-center px-auto">
                                                    <div class="col px-2">
                                                        <div
                                                            class="d-flex justify-content-center mb-2"
                                                        >
                                                            <label for="tagName"><b>Name</b></label>
                                                        </div>
                                                        <input
                                                            v-model="tagForm.name"
                                                            class="form-control py-1"
                                                            type="text"
                                                            id="tagName"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                    @click.prevent="clearForm"
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <!-- ADD FORM MODAL -->
    <div
        class="modal fade"
        :id="`addFormModal`"
        tabindex="-1"
        aria-labelledby="addFormModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h1
                        v-if="formType === 'add-category'"
                        class="modal-title fs-5"
                        id="addFormModalLabel"
                    >
                        Add Category
                    </h1>
                    <h1 v-else class="modal-title fs-5" id="addFormModalLabel">Add Tag</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="addSubmitHandler">
                    <div class="modal-body my-2">
                        <div class="d-flex align-items-center px-auto">
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="nameInput"><b>Name</b></label>
                                </div>
                                <input
                                    v-if="formType === 'add-category'"
                                    v-model="categoryForm.name"
                                    class="form-control py-1"
                                    type="text"
                                    id="nameInput"
                                />
                                <input
                                    v-else
                                    v-model="tagForm.name"
                                    class="form-control py-1"
                                    type="text"
                                    id="nameInput"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            @click.prevent="clearForm"
                        >
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

button {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.tbl-container {
    border-radius: 6px;
    overflow-x: scroll;
}

th {
    vertical-align: middle;
}

.small-button {
    font-size: 13px;
}
</style>
