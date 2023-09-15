<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        player: Object,
        playerFormType: String
    },
    data() {
        return {
            playerForm: {
                id: this.player.id ? this.player.id : 0,
                name: this.player.name ? this.player.name : '',
                age: this.player.age ? this.player.age : 0,
                number: this.player.number ? this.player.number : 0,
                about: this.player.about ? this.player.about : '',
                nationality: this.player.nationality ? this.player.nationality : '',
                position: this.player.position ? this.player.position : '',
                height: this.player.height ? this.player.height : 0,
                weight: this.player.weight ? this.player.weight : 0,
                currentTeam: this.player.currentTeam ? this.player.currentTeam : '',
                gamesPlayed: this.player.gamesPlayed ? this.player.gamesPlayed : 0,
                flagUrl: this.player.flagUrl ? this.player.flagUrl : '',
                imgUrl: this.player.imgUrl ? this.player.imgUrl : ''
            },
            playerActivityForm: [
                {
                    id: 1,
                    season: 0,
                    club: '',
                    goals: 0,
                    assists: 0,
                    yellowCards: 0,
                    redCards: 0,
                    appearances: 0,
                    winRatio: 0,
                    drawRatio: 0,
                    lossRatio: 0,
                    ownGoals: 0
                }
            ]
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addPlayer', 'editPlayer']),
        submitHandler() {
            if (this.playerFormType === 'add-player') {
                this.addPlayer({
                    name: this.playerForm.name,
                    age: this.playerForm.age,
                    number: this.playerForm.number,
                    about: this.playerForm.about,
                    nationality: this.playerForm.nationality,
                    position: this.playerForm.position,
                    height: this.playerForm.height,
                    weight: this.playerForm.weight,
                    currentTeam: this.playerForm.currentTeam,
                    gamesPlayed: this.playerForm.gamesPlayed,
                    flagUrl: this.playerForm.flagUrl,
                    imgUrl: this.playerForm.imgUrl,
                    PlayerActivities: this.playerActivityForm
                })
            } else {
                this.editPlayer(
                    {
                        name: this.playerForm.name,
                        age: this.playerForm.age,
                        number: this.playerForm.number,
                        about: this.playerForm.about,
                        nationality: this.playerForm.nationality,
                        position: this.playerForm.position,
                        height: this.playerForm.height,
                        weight: this.playerForm.weight,
                        currentTeam: this.playerForm.currentTeam,
                        gamesPlayed: this.playerForm.gamesPlayed,
                        flagUrl: this.playerForm.flagUrl,
                        imgUrl: this.playerForm.imgUrl
                    },
                    this.playerForm.id
                )

                this.playerForm.name = ''
                this.playerForm.age = 0
                this.playerForm.number = 0
                this.playerForm.about = ''
                this.playerForm.nationality = ''
                this.playerForm.position = ''
                this.playerForm.height = 0
                this.playerForm.weight = 0
                this.playerForm.currentTeam = ''
                this.playerForm.gamesPlayed = 0
                this.playerForm.flagUrl = ''
                this.playerForm.imgUrl = ''
            }
        },
        cancelAction() {
            this.$router.push(`/`)

            this.playerForm.name = ''
            this.playerForm.age = 0
            this.playerForm.number = 0
            this.playerForm.about = ''
            this.playerForm.nationality = ''
            this.playerForm.position = ''
            this.playerForm.height = 0
            this.playerForm.weight = 0
            this.playerForm.currentTeam = ''
            this.playerForm.gamesPlayed = 0
            this.playerForm.flagUrl = ''
            this.playerForm.imgUrl = ''
        },
        handleAdd(id) {
            this.playerActivityForm = [
                ...this.playerActivityForm,
                {
                    id: id + 1,
                    season: 0,
                    club: '',
                    goals: 0,
                    assists: 0,
                    yellowCards: 0,
                    redCards: 0,
                    appearances: 0,
                    winRatio: 0,
                    drawRatio: 0,
                    lossRatio: 0,
                    ownGoals: 0
                }
            ]
        },
        handleSubstract() {
            if (this.playerActivityForm.length > 1) {
                this.playerActivityForm.pop()
            }
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="playerFormType === 'add-player'" class="my-3">
                <h2 class="m-0">Add New Player</h2>
                <hr />
            </div>
            <div v-if="playerFormType === 'edit-player'" class="my-3">
                <h2 class="m-0">Edit Player</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="playerName" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.name"
                                type="text"
                                class="form-control"
                                id="playerName"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="playerAge" class="form-label col-3 m-0">Age</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.age"
                                type="number"
                                class="form-control input-right"
                                id="playerAge"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="playerNumber" class="form-label col-3 m-0">Number</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.number"
                                type="number"
                                class="form-control input-right"
                                id="playerNumber"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="playerAbout" class="form-label col-3 mb-0 mt-2">About</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="playerForm.about"
                                class="form-control"
                                id="playerAbout"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="playerNationality" class="form-label col-3 m-0"
                            >Nationality</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.nationality"
                                type="text"
                                class="form-control"
                                id="playerNationality"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="playerPosition" class="form-label col-3 m-0">Position</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.position"
                                type="text"
                                class="form-control"
                                id="playerPosition"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerHeight" class="form-label col-3 m-0">Height (cm)</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.height"
                                type="number"
                                class="form-control input-right"
                                id="playerHeight"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerWeight" class="form-label col-3 m-0">Weight (kg)</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.weight"
                                type="number"
                                class="form-control input-right"
                                id="playerWeight"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerCurrentTeam" class="form-label col-3 m-0"
                            >Current Team</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.currentTeam"
                                type="text"
                                class="form-control"
                                id="playerCurrentTeam"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerGamesPlayed" class="form-label col-3 m-0"
                            >Games Played</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.gamesPlayed"
                                type="number"
                                class="form-control input-right"
                                id="playerGamesPlayed"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerflagUrl" class="form-label col-3 m-0"
                            >Flag Image URL</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.flagUrl"
                                type="text"
                                class="form-control"
                                id="playerflagUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="playerImgUrl" class="form-label col-3 m-0"
                            >Player Image URL</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="playerForm.imgUrl"
                                type="text"
                                class="form-control"
                                id="playerImgUrl"
                            />
                        </div>
                    </div>

                    <!-- Button Trigger Player Activity Modal -->
                    <button
                        v-if="playerFormType === 'add-player'"
                        type="button"
                        class="btn btn-warning btn-add-pa"
                        data-bs-toggle="modal"
                        data-bs-target="#playerActivityModal"
                    >
                        Add Player Activities
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

    <!-- PLAYER ACTIVITY MODAL -->
    <div
        class="modal fade"
        id="playerActivityModal"
        tabindex="-1"
        aria-labelledby="paModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paModalLabel">Input Player Activity</h1>
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
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paSeason"><b>Season</b></label>
                            </div>
                        </div>
                        <div class="col-2 px-2">
                            <div class="ps-3 mb-2">
                                <label for="paClub"><b>Club</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paGoals"><b>Goals</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paAssists"><b>Assists</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paYellowCards"><b>Yellow Crd</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paRedCards"><b>Red Cards</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paAppearances"><b>Appearances</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paWinRatio"><b>Win Ratio</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paDrawRatio"><b>Draw Ratio</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paLossRatio"><b>Loss Ratio</b></label>
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="playerAct in playerActivityForm"
                        :key="playerAct.id"
                        class="d-flex mt-2 mb-2"
                    >
                        <div class="d-flex align-items-center px-auto">
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.season"
                                    class="form-control py-1"
                                    type="number"
                                    id="paSeason"
                                />
                            </div>
                            <div class="col-2 px-2">
                                <input
                                    v-model="playerAct.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.goals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.assists"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAssists"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.yellowCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paYellowCards"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.redCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.appearances"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAppearances"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.winRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paWinRatio"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.drawRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paDrawRatio"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="playerAct.lossRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paLossRatio"
                                />
                            </div>
                        </div>
                        <div class="d-flex align-items-end ms-1 mb-1">
                            <button
                                class="btn btn-success me-1 btn-pa-handler"
                                type="button"
                                @click.prevent="handleAdd(playerAct.id)"
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
