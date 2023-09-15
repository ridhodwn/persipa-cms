<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        player: Object
    },
    data() {
        return {
            paFormType: '',
            playerActForm: {
                id: 0,
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
        }
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'deletePlayerById',
            'fetchPlayerById',
            'deletePAById',
            'addPlayerAct',
            'editPlayerAct'
        ]),
        deletePlayerByIdComp(id) {
            this.deletePlayerById(id)
        },
        deletePAByIdComp(id) {
            this.deletePAById(id)
        },
        buttonAction(id) {
            this.fetchPlayerById(id)
        },
        buttonActionPA(type, playerActivity) {
            if (type === 'edit-player-act') {
                this.paFormType = 'edit-player-act'
                this.playerActForm.id = playerActivity.id
                this.playerActForm.season = playerActivity.season
                this.playerActForm.club = playerActivity.club
                this.playerActForm.goals = playerActivity.goals
                this.playerActForm.assists = playerActivity.assists
                this.playerActForm.yellowCards = playerActivity.yellowCards
                this.playerActForm.redCards = playerActivity.redCards
                this.playerActForm.appearances = playerActivity.appearances
                this.playerActForm.winRatio = playerActivity.winRatio
                this.playerActForm.drawRatio = playerActivity.drawRatio
                this.playerActForm.lossRatio = playerActivity.lossRatio
                this.playerActForm.ownGoals = playerActivity.ownGoals
            } else {
                this.paFormType = 'add-player-act'
            }
        },
        paSubmitHandler(id) {
            if (this.paFormType === 'add-player-act') {
                this.addPlayerAct(
                    {
                        season: this.playerActForm.season,
                        club: this.playerActForm.club,
                        goals: this.playerActForm.goals,
                        assists: this.playerActForm.assists,
                        yellowCards: this.playerActForm.yellowCards,
                        redCards: this.playerActForm.redCards,
                        appearances: this.playerActForm.appearances,
                        winRatio: this.playerActForm.winRatio,
                        drawRatio: this.playerActForm.drawRatio,
                        lossRatio: this.playerActForm.lossRatio,
                        ownGoals: this.playerActForm.ownGoals
                    },
                    id
                )
            } else if (this.paFormType === 'edit-player-act') {
                id = this.playerActForm.id
                this.editPlayerAct(
                    {
                        season: this.playerActForm.season,
                        club: this.playerActForm.club,
                        goals: this.playerActForm.goals,
                        assists: this.playerActForm.assists,
                        yellowCards: this.playerActForm.yellowCards,
                        redCards: this.playerActForm.redCards,
                        appearances: this.playerActForm.appearances,
                        winRatio: this.playerActForm.winRatio,
                        drawRatio: this.playerActForm.drawRatio,
                        lossRatio: this.playerActForm.lossRatio,
                        ownGoals: this.playerActForm.ownGoals
                    },
                    id
                )

                this.playerActForm.id = 0
                this.playerActForm.season = 0
                this.playerActForm.club = ''
                this.playerActForm.goals = 0
                this.playerActForm.assists = 0
                this.playerActForm.yellowCards = 0
                this.playerActForm.redCards = 0
                this.playerActForm.appearances = 0
                this.playerActForm.winRatio = 0
                this.playerActForm.drawRatio = 0
                this.playerActForm.lossRatio = 0
                this.playerActForm.ownGoals = 0
            }
        },
        clearForm() {
            this.playerActForm.id = 0
            this.playerActForm.season = 0
            this.playerActForm.club = ''
            this.playerActForm.goals = 0
            this.playerActForm.assists = 0
            this.playerActForm.yellowCards = 0
            this.playerActForm.redCards = 0
            this.playerActForm.appearances = 0
            this.playerActForm.winRatio = 0
            this.playerActForm.drawRatio = 0
            this.playerActForm.lossRatio = 0
            this.playerActForm.ownGoals = 0
        }
    },
    computed: {
        seasonsArranged() {
            let seasonsArr = []
            this.player.PlayerActivities.forEach((el) => {
                seasonsArr.push(el.season)
            })
            seasonsArr.sort((a, b) => b - a)
            return seasonsArr.join(' ')
        },
        sortPA() {
            this.player.PlayerActivities.sort((a, b) => b.season - a.season)
            return this.player.PlayerActivities
        }
    }
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ player.id }}</td>
        <td>{{ player.name }}</td>
        <td>
            <img :src="player.imgUrl" class="img-fluid rounded-1" />
        </td>
        <td>
            <div class="about-cell">{{ player.about }}</div>
        </td>
        <td class="text-center">{{ player.age }}</td>
        <td class="text-center">{{ player.number }}</td>
        <td class="text-center">
            {{ player.nationality }}<br /><img
                :src="player.flagUrl"
                class="img-fluid rounded-1 flag-img mt-1"
            />
        </td>
        <td class="text-center">{{ player.position }}</td>
        <td class="text-center">{{ player.height }}</td>
        <td class="text-center">{{ player.weight }}</td>
        <td class="text-center">{{ player.currentTeam }}</td>
        <td class="text-center">{{ player.gamesPlayed }}</td>
        <td class="text-center">{{ seasonsArranged }}</td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#playerActTblModal${player.id}`"
            >
                See Activity
            </button>
        </td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(player.id)"
                href=""
                class="bi bi-pencil-fill me-2 text-primary"
            ></a>
            <a
                @click.prevent="deletePlayerByIdComp(player.id)"
                href=""
                class="bi bi-trash-fill text-danger"
            ></a>
        </td>
    </tr>

    <!-- PLAYER ACTIVITY MODAL -->
    <div
        class="modal fade"
        :id="`playerActTblModal${player.id}`"
        tabindex="-1"
        aria-labelledby="playerActModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="playerActModalLabel">{{ player.name }}</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover mt-4 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center">Season</th>
                                <th scope="col">Club</th>
                                <th scope="col" class="text-center">Goals</th>
                                <th scope="col" class="text-center">Assists</th>
                                <th scope="col" class="text-center">Yellow Cards</th>
                                <th scope="col" class="text-center">Red Cards</th>
                                <th scope="col" class="text-center">Appearances</th>
                                <th scope="col" class="text-center">Win Ratio</th>
                                <th scope="col" class="text-center">Draw Ratio</th>
                                <th scope="col" class="text-center">Loss Ratio</th>
                                <th scope="col" class="text-center">Own Goals</th>
                                <th scope="col" width="100px" class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-for="playerActivity in sortPA" :key="playerActivity.id">
                            <tr>
                                <td class="fw-bold text-center">{{ playerActivity.season }}</td>
                                <td>{{ playerActivity.club }}</td>
                                <td class="text-center">{{ playerActivity.goals }}</td>
                                <td class="text-center">{{ playerActivity.assists }}</td>
                                <td class="text-center">{{ playerActivity.yellowCards }}</td>
                                <td class="text-center">{{ playerActivity.redCards }}</td>
                                <td class="text-center">{{ playerActivity.appearances }}</td>
                                <td class="text-center">{{ playerActivity.winRatio }}</td>
                                <td class="text-center">{{ playerActivity.drawRatio }}</td>
                                <td class="text-center">{{ playerActivity.lossRatio }}</td>
                                <td class="text-center">{{ playerActivity.ownGoals }}</td>
                                <td class="text-center">
                                    <a
                                        @click.prevent="
                                            buttonActionPA('edit-player-act', playerActivity)
                                        "
                                        href=""
                                        class="bi bi-pencil-fill me-3 text-primary"
                                        data-bs-toggle="modal"
                                        :data-bs-target="`#playerActFormModal${player.id}`"
                                    ></a>
                                    <a
                                        @click.prevent="deletePAByIdComp(playerActivity.id)"
                                        href=""
                                        class="bi bi-trash-fill text-danger"
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        @click.prevent="buttonActionPA('add-player-act')"
                        type="button"
                        class="btn btn-warning rounded-lg add-act-btn ms-2"
                        data-bs-toggle="modal"
                        :data-bs-target="`#playerActFormModal${player.id}`"
                    >
                        Add Activity
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

    <!-- PLAYER ACTIVITY FORM MODAL -->
    <div
        class="modal fade"
        :id="`playerActFormModal${player.id}`"
        tabindex="-1"
        aria-labelledby="paFormModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paFormModalLabel">{{ player.name }}</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="paSubmitHandler(player.id)">
                    <div class="modal-body my-2">
                        <div class="d-flex align-items-center px-auto">
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paSeason"><b>Season</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.season"
                                    class="form-control py-1"
                                    type="number"
                                    id="paSeason"
                                />
                            </div>
                            <div class="col-2 px-2">
                                <div class="ps-3 mb-2">
                                    <label for="paClub"><b>Club</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paGoals"><b>Goals</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.goals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paAssists"><b>Assists</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.assists"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAssists"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paYellowCards"><b>Yellow Crd</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.yellowCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paYellowCards"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paRedCards"><b>Red Cards</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.redCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paAppearances"><b>Appearances</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.appearances"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAppearances"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paWinRatio"><b>Win Ratio</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.winRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paWinRatio"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paDrawRatio"><b>Draw Ratio</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.drawRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paDrawRatio"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paLossRatio"><b>Loss Ratio</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.lossRatio"
                                    class="form-control py-1"
                                    type="number"
                                    id="paLossRatio"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paOwnGoals"><b>Own Goals</b></label>
                                </div>
                                <input
                                    v-model="playerActForm.ownGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paOwnGoals"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#playerActTblModal${player.id}`"
                            @click.prevent="clearForm"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#playerActTblModal${player.id}`"
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

.add-act-btn {
    font-size: 14px;
    font-weight: 500;
    color: white;
}

.flag-img {
    height: 20px;
    border: 1px solid #989898;
}
</style>
