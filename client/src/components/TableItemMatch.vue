<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        match: Object
    },
    data() {
        return {
            mpFormType: '',
            matchPlayerForm: {
                id: 0,
                club: '',
                playerName: '',
                playerNumber: 0,
                playerPosition: '',
                playerGoals: 0,
                playerOwnGoals: 0,
                playerAssists: 0,
                playerYellowCards: 0,
                playerRedCards: 0
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'deleteMatchById',
            'fetchMatchById',
            'deleteMatchPlyById',
            'addMatchPly',
            'editMatchPly'
        ]),
        deleteMatchByIdComp(id) {
            this.deleteMatchById(id)
        },
        deleteMatchPlyByIdComp(id) {
            this.deleteMatchPlyById(id)
        },
        buttonAction(id) {
            this.fetchMatchById(id)
        },
        buttonActionMP(type, matchPlayer) {
            if (type === 'edit-match-ply') {
                this.mpFormType = 'edit-match-ply'
                this.matchPlayerForm.id = matchPlayer.id
                this.matchPlayerForm.club = matchPlayer.club
                this.matchPlayerForm.playerName = matchPlayer.playerName
                this.matchPlayerForm.playerNumber = matchPlayer.playerNumber
                this.matchPlayerForm.playerPosition = matchPlayer.playerPosition
                this.matchPlayerForm.playerGoals = matchPlayer.playerGoals
                this.matchPlayerForm.playerOwnGoals = matchPlayer.playerOwnGoals
                this.matchPlayerForm.playerAssists = matchPlayer.playerAssists
                this.matchPlayerForm.playerYellowCards = matchPlayer.playerYellowCards
                this.matchPlayerForm.playerRedCards = matchPlayer.playerRedCards
            } else {
                this.mpFormType = 'add-match-ply'
            }
        },
        mpSubmitHandler(id, team) {
            if (this.mpFormType === 'add-match-ply') {
                this.addMatchPly(
                    {
                        club: team,
                        playerName: this.matchPlayerForm.playerName,
                        playerNumber: this.matchPlayerForm.playerNumber,
                        playerPosition: this.matchPlayerForm.playerPosition,
                        playerGoals: this.matchPlayerForm.playerGoals,
                        playerOwnGoals: this.matchPlayerForm.playerOwnGoals,
                        playerAssists: this.matchPlayerForm.playerAssists,
                        playerYellowCards: this.matchPlayerForm.playerYellowCards,
                        playerRedCards: this.matchPlayerForm.playerRedCards
                    },
                    id
                )
            } else if (this.mpFormType === 'edit-match-ply') {
                id = this.matchPlayerForm.id
                this.editMatchPly(
                    {
                        club: team,
                        playerName: this.matchPlayerForm.playerName,
                        playerNumber: this.matchPlayerForm.playerNumber,
                        playerPosition: this.matchPlayerForm.playerPosition,
                        playerGoals: this.matchPlayerForm.playerGoals,
                        playerOwnGoals: this.matchPlayerForm.playerOwnGoals,
                        playerAssists: this.matchPlayerForm.playerAssists,
                        playerYellowCards: this.matchPlayerForm.playerYellowCards,
                        playerRedCards: this.matchPlayerForm.playerRedCards
                    },
                    id
                )

                this.matchPlayerForm.id = 0
                this.matchPlayerForm.club = ''
                this.matchPlayerForm.playerName = ''
                this.matchPlayerForm.playerNumber = 0
                this.matchPlayerForm.playerPosition = ''
                this.matchPlayerForm.playerGoals = 0
                this.matchPlayerForm.playerOwnGoals = 0
                this.matchPlayerForm.playerAssists = 0
                this.matchPlayerForm.playerYellowCards = 0
                this.matchPlayerForm.playerRedCards = 0
            }
        },
        clearForm() {
            this.matchPlayerForm.id = 0
            this.matchPlayerForm.club = ''
            this.matchPlayerForm.playerName = ''
            this.matchPlayerForm.playerNumber = 0
            this.matchPlayerForm.playerPosition = ''
            this.matchPlayerForm.playerGoals = 0
            this.matchPlayerForm.playerOwnGoals = 0
            this.matchPlayerForm.playerAssists = 0
            this.matchPlayerForm.playerYellowCards = 0
            this.matchPlayerForm.playerRedCards = 0
        },
        buttonPlayerA() {
            console.log('>>> TES', this.match.id)
            console.log('>>> TES', this.match.teamA)
        }
    },
    computed: {
        filterTeamA() {
            let players = this.match.MatchPlayers.sort((a, b) => a.playerName - b.playerName).filter(el => el.club === this.match.teamA)
            return players
        },
        filterTeamB() {
            let players = this.match.MatchPlayers.sort((a, b) => a.playerName - b.playerName).filter(el => el.club === this.match.teamB)
            return players
        },
        formatDate() {
            let dateNew = new Date(this.match.date)
            const formattedDate = dateNew.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            return formattedDate
        },
        formatDateI() {
            let dateNew = new Date(this.match.insightDate)
            const formattedDate = dateNew.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            return formattedDate
        },
        splitJoinTextA() {
            return this.match.teamA.split(' ').join('')
        },
        splitJoinTextB() {
            return this.match.teamB.split(' ').join('')
        },
        splitTimekeepers() {
            return this.match.timeKeepers.split(',').join(', ')
        },
        replaceVidUrl() {
            return this.match.insightVideoUrl.replace('watch?v=', 'embed/')
        }
    }
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ match.id }}</td>
        <td>
            <img :src="match.placeImgUrl" class="img-fluid rounded-1" />
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#overviewModal${match.id}`"
            >
                See Overview
            </button>
        </td>
        <td class="text-center">
            {{ match.teamA }}<br /><img
                :src="match.teamALogo"
                class="img-fluid rounded-1 flag-img mt-1"
            />
        </td>
        <td class="text-center">
            {{ match.teamB }}<br /><img
                :src="match.teamBLogo"
                class="img-fluid rounded-1 flag-img mt-1"
            />
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#scoresModal${match.id}`"
            >
                See Scores
            </button>
        </td>
        <td class="text-center">{{ formatDate }}</td>
        <td class="text-center">{{ match.time }}</td>
        <td class="text-center">{{ match.fulltime }}</td>
        <td><div class="highlight-url">{{ match.highlightUrl }}</div></td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#insightsModal${match.id}`"
            >
                See Insights
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#plyActModal${match.id + splitJoinTextA}`"
                @click.prevent="buttonPlayerA()"
            >
                See Activity
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#plyActModal${match.id + splitJoinTextB}`"
            >
                See Activity
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#trainersModal${match.id}`"
            >
                See Trainers
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#locationModal${match.id}`"
            >
                See Location
            </button>
        </td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(match.id)"
                href=""
                class="bi bi-pencil-fill me-1 text-primary"
            ></a>
            <a
                @click.prevent="deleteMatchByIdComp(match.id)"
                href=""
                class="bi bi-trash-fill text-danger"
            ></a>
        </td>
    </tr>

    <!-- OVERVIEW MODAL -->
    <div
        class="modal fade"
        :id="`overviewModal${match.id}`"
        tabindex="-1"
        aria-labelledby="overviewModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="overviewModalLabel">
                        Overview {{ match.teamA }} vs {{ match.teamB }}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <p>{{ match.overview }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- SCORES MODAL -->
    <div
        class="modal fade"
        :id="`scoresModal${match.id}`"
        tabindex="-1"
        aria-labelledby="scoresModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="scoresModalLabel">
                        Score {{ match.teamA }} vs {{ match.teamB }}
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
                                <th scope="col" class="text-center">Score {{ match.teamA }}</th>
                                <th scope="col" width="80px" class="text-center sub-header">1st Half</th>
                                <th scope="col" width="80px" class="text-center sub-header">2nd Half</th>
                                <th scope="col" class="text-center">Score {{ match.teamB }}</th>
                                <th scope="col" width="80px" class="text-center sub-header">1st Half</th>
                                <th scope="col" width="80px" class="text-center sub-header">2nd Half</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">{{ match.teamAScore }}</td>
                                <td class="text-center">{{ match.teamA1HScore }}</td>
                                <td class="text-center">{{ match.teamA2HScore }}</td>
                                <td class="text-center">{{ match.teamBScore }}</td>
                                <td class="text-center">{{ match.teamB1HScore }}</td>
                                <td class="text-center">{{ match.teamB2HScore }}</td>
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

    <!-- INSIGHTS MODAL -->
    <div
        class="modal fade"
        :id="`insightsModal${match.id}`"
        tabindex="-1"
        aria-labelledby="insightsModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="insightsModalLabel">
                        Insights {{ match.teamA }} vs {{ match.teamB }}
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
                                <th scope="col" class="text-center" width="200px">Image</th>
                                <th scope="col" class="text-center">Video</th>
                                <th scope="col" width="150px" class="text-center">Date</th>
                                <th scope="col" class="text-center">Time</th>
                                <th scope="col" width="180px" class="text-center">League</th>
                                <th scope="col" class="text-center">Season</th>
                                <th scope="col" class="text-center">Fulltime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img :src="match.insightImgUrl" class="img-fluid rounded-1" />
                                </td>
                                <td class="text-center">
                                    <iframe width="230" height="130" :src="replaceVidUrl">
                                    </iframe>
                                </td>
                                <td class="text-center">{{ formatDateI }}</td>
                                <td class="text-center">{{ match.insightTime }}</td>
                                <td class="text-center">{{ match.insightLeague }}</td>
                                <td class="text-center">{{ match.insightSeason }}</td>
                                <td class="text-center">{{ match.insightFulltime }}'</td>
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

    <!-- PLAYER A MODAL -->
    <div
        class="modal fade"
        :id="`plyActModal${match.id + splitJoinTextA}`"
        tabindex="-1"
        aria-labelledby="playerActAModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="playerActAModalLabel">
                        {{ match.teamA }} Player Activity
                    </h1>
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
                                <th scope="col" class="text-center">Name</th>
                                <th scope="col" class="text-center">Number</th>
                                <th scope="col" class="text-center">Position</th>
                                <th scope="col" width="100px" class="text-center">Goals</th>
                                <th scope="col" class="text-center">Own Goals</th>
                                <th scope="col" class="text-center">Assists</th>
                                <th scope="col" class="text-center">Yellow Cards</th>
                                <th scope="col" class="text-center">Red Cards</th>
                                <th scope="col" width="100px" class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-for="matchPlayer in filterTeamA" :key="matchPlayer.id">
                            <tr>
                                <td class="fw-bold text-center">{{ matchPlayer.playerName }}</td>
                                <td class="text-center">{{ matchPlayer.playerNumber }}</td>
                                <td class="text-center">{{ matchPlayer.playerPosition }}</td>
                                <td class="text-center">{{ matchPlayer.playerGoals }}</td>
                                <td class="text-center">{{ matchPlayer.playerOwnGoals }}</td>
                                <td class="text-center">{{ matchPlayer.playerAssists }}</td>
                                <td class="text-center">{{ matchPlayer.playerYellowCards }}</td>
                                <td class="text-center">{{ matchPlayer.playerRedCards }}</td>
                                <td class="text-center">
                                    <a
                                        @click.prevent="
                                            buttonActionMP('edit-match-ply', matchPlayer)
                                        "
                                        href=""
                                        class="bi bi-pencil-fill me-3 text-primary"
                                        data-bs-toggle="modal"
                                        :data-bs-target="`#playerAActFormModal${match.id + splitJoinTextA}`"
                                    ></a>
                                    <a
                                        @click.prevent="deleteMatchPlyByIdComp(matchPlayer.id)"
                                        href=""
                                        class="bi bi-trash-fill text-danger"
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        @click.prevent="buttonActionMP('add-match-ply')"
                        type="button"
                        class="btn btn-warning rounded-lg add-act-btn ms-2"
                        data-bs-toggle="modal"
                        :data-bs-target="`#playerAActFormModal${match.id + splitJoinTextA}`"
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

    <!-- PLAYER B MODAL -->
    <div
        class="modal fade"
        :id="`plyActModal${match.id + splitJoinTextB}`"
        tabindex="-1"
        aria-labelledby="playerActBModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="playerActBModalLabel">
                        {{ match.teamB }} Player Activity
                    </h1>
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
                                <th scope="col" class="text-center">Name</th>
                                <th scope="col" class="text-center">Number</th>
                                <th scope="col" class="text-center">Position</th>
                                <th scope="col" width="100px" class="text-center">Goals</th>
                                <th scope="col" class="text-center">Own Goals</th>
                                <th scope="col" class="text-center">Assists</th>
                                <th scope="col" class="text-center">Yellow Cards</th>
                                <th scope="col" class="text-center">Red Cards</th>
                                <th scope="col" width="100px" class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody v-for="matchPlayer in filterTeamB" :key="matchPlayer.id">
                            <tr>
                                <td class="fw-bold text-center">{{ matchPlayer.playerName }}</td>
                                <td class="text-center">{{ matchPlayer.playerNumber }}</td>
                                <td class="text-center">{{ matchPlayer.playerPosition }}</td>
                                <td class="text-center">{{ matchPlayer.playerGoals }}</td>
                                <td class="text-center">{{ matchPlayer.playerOwnGoals }}</td>
                                <td class="text-center">{{ matchPlayer.playerAssists }}</td>
                                <td class="text-center">{{ matchPlayer.playerYellowCards }}</td>
                                <td class="text-center">{{ matchPlayer.playerRedCards }}</td>
                                <td class="text-center">
                                    <a
                                        @click.prevent="
                                            buttonActionMP('edit-match-ply', matchPlayer)
                                        "
                                        href=""
                                        class="bi bi-pencil-fill me-3 text-primary"
                                        data-bs-toggle="modal"
                                        :data-bs-target="`#playerBActFormModal${match.id}`"
                                    ></a>
                                    <a
                                        @click.prevent="deleteMatchPlyByIdComp(matchPlayer.id)"
                                        href=""
                                        class="bi bi-trash-fill text-danger"
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        @click.prevent="buttonActionMP('add-match-ply')"
                        type="button"
                        class="btn btn-warning rounded-lg add-act-btn ms-2"
                        data-bs-toggle="modal"
                        :data-bs-target="`#playerBActFormModal${match.id}`"
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

    <!-- TRAINERS MODAL -->
    <div
        class="modal fade"
        :id="`trainersModal${match.id}`"
        tabindex="-1"
        aria-labelledby="trainersModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="trainersModalLabel">
                        Trainers {{ match.teamA }} vs {{ match.teamB }}
                    </h1>
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
                                <th scope="col" width="100px">Referee</th>
                                <th scope="col" width="100px">Assistant Referee</th>
                                <th scope="col" width="100px">Timekeepers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ match.referee }}</td>
                                <td>{{ match.assistantRef }}</td>
                                <td>{{ splitTimekeepers }}</td>
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

    <!-- LOCATION MODAL -->
    <div
        class="modal fade"
        :id="`locationModal${match.id}`"
        tabindex="-1"
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="locationModalLabel">
                        Location {{ match.teamA }} vs {{ match.teamB }}
                    </h1>
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
                                <th scope="col">Map</th>
                                <th scope="col" width="350px">Location URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><iframe :src="match.gmapIframe" height="200" width="350" title="googleMap"></iframe></td>
                                <td><div class="gmap-iframe">{{ match.locationUrl }}</div></td>
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

    <!-- PLAYER A ACTIVITY FORM MODAL -->
    <div
        class="modal fade"
        :id="`playerAActFormModal${match.id + splitJoinTextA}`"
        tabindex="-1"
        aria-labelledby="paFormModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paFormModalLabel">{{ match.teamA }} Player Activity</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="mpSubmitHandler(match.id, match.teamA)">
                    <div class="modal-body my-2">
                        <div class="d-flex align-items-center px-auto">
                            <div class="col-2 px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paName"><b>Name</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerName"
                                    class="form-control py-1"
                                    type="text"
                                    id="paName"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paNumber"><b>Number</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerNumber"
                                    class="form-control py-1"
                                    type="number"
                                    id="paNumber"
                                />
                            </div>
                            <div class="col-2 px-2">
                                <div class="ps-3 mb-2">
                                    <label for="paClub"><b>Club</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="ps-3 mb-2">
                                    <label for="paPosition"><b>Position</b></label>
                                </div>
                                <select
                                    v-model="matchPlayerForm.playerPosition"
                                    class="form-select py-1"
                                    aria-label="Position select"
                                    id="paPosition"
                                >
                                    <option value="Goalkeeper">Goalkeeper</option>
                                    <option value="Defender">Defender</option>
                                    <option value="Mid-Fielder">Mid-Fielder</option>
                                    <option value="Forward">Forward</option>
                                </select>
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paGoals"><b>Goals</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paOwnGoals"><b>Own Goals</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerOwnGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paOwnGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paAssists"><b>Assists</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerAssists"
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
                                    v-model="matchPlayerForm.playerYellowCards"
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
                                    v-model="matchPlayerForm.playerRedCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#plyActModal${match.id + splitJoinTextA}`"
                            @click.prevent="clearForm"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#plyActModal${match.id + splitJoinTextA}`"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- PLAYER B ACTIVITY FORM MODAL -->
    <div
        class="modal fade"
        :id="`playerBActFormModal${match.id}`"
        tabindex="-1"
        aria-labelledby="paFormModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paFormModalLabel">{{ match.teamB }} Player Activity</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="mpSubmitHandler(match.id, match.teamB)">
                    <div class="modal-body my-2">
                        <div class="d-flex align-items-center px-auto">
                            <div class="col-2 px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paName"><b>Name</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerName"
                                    class="form-control py-1"
                                    type="text"
                                    id="paName"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paNumber"><b>Number</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerNumber"
                                    class="form-control py-1"
                                    type="number"
                                    id="paNumber"
                                />
                            </div>
                            <div class="col-2 px-2">
                                <div class="ps-3 mb-2">
                                    <label for="paClub"><b>Club</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="ps-3 mb-2">
                                    <label for="paPosition"><b>Position</b></label>
                                </div>
                                <select
                                    v-model="matchPlayerForm.playerPosition"
                                    class="form-select py-1"
                                    aria-label="Position select"
                                    id="paPosition"
                                >
                                    <option value="Goalkeeper">Goalkeeper</option>
                                    <option value="Defender">Defender</option>
                                    <option value="Mid-Fielder">Mid-Fielder</option>
                                    <option value="Forward">Forward</option>
                                </select>
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paGoals"><b>Goals</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paOwnGoals"><b>Own Goals</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerOwnGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paOwnGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <div class="d-flex justify-content-center mb-2">
                                    <label for="paAssists"><b>Assists</b></label>
                                </div>
                                <input
                                    v-model="matchPlayerForm.playerAssists"
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
                                    v-model="matchPlayerForm.playerYellowCards"
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
                                    v-model="matchPlayerForm.playerRedCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#plyActModal${match.id + splitJoinTextB}`"
                            @click.prevent="clearForm"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            :data-bs-target="`#plyActModal${match.id + splitJoinTextB}`"
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
</style>
