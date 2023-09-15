<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        match: Object,
        matchFormType: String
    },
    data() {
        return {
            matchForm: {
                id: this.match.id ? this.match.id : 0,
                placeName: this.match.placeName ? this.match.placeName : '',
                placeImgUrl: this.match.placeImgUrl ? this.match.placeImgUrl : '',
                teamA: this.match.teamA ? this.match.teamA : '',
                teamB: this.match.teamB ? this.match.teamB : '',
                overview: this.match.overview ? this.match.overview : '',
                date: this.match.date ? this.match.date : '',
                timeHr: this.match.time ? this.match.time.substring(0, 2): '00',
                timeMn: this.match.time ? this.match.time.substring(3): '00',
                fulltime: this.match.fulltime ? this.match.fulltime : '',
                teamALogo: this.match.teamALogo ? this.match.teamALogo : '',
                teamBLogo: this.match.teamBLogo ? this.match.teamBLogo : '',
                teamAScore: this.match.teamAScore ? this.match.teamAScore : 0,
                teamBScore: this.match.teamBScore ? this.match.teamBScore : 0,
                highlightUrl: this.match.highlightUrl ? this.match.highlightUrl : '',
                insightImgUrl: this.match.insightImgUrl ? this.match.insightImgUrl : '',
                insightVideoUrl: this.match.insightVideoUrl ? this.match.insightVideoUrl : '',
                insightDate: this.match.insightDate ? this.match.insightDate : '',
                insightTimeHr: this.match.insightTime ? this.match.insightTime.substring(0, 2): '00',
                insightTimeMn: this.match.insightTime ? this.match.insightTime.substring(3): '00',
                insightLeague: this.match.insightLeague ? this.match.insightLeague : '',
                insightSeason: this.match.insightSeason ? this.match.insightSeason : 0,
                insightFulltime: this.match.insightFulltime ? this.match.insightFulltime : 0,
                locationUrl: this.match.locationUrl ? this.match.locationUrl : '',
                gmapIframe: this.match.gmapIframe ? this.match.gmapIframe : '',
                teamA1HScore: this.match.teamA1HScore ? this.match.teamA1HScore : 0,
                teamA2HScore: this.match.teamA2HScore ? this.match.teamA2HScore : 0,
                teamB1HScore: this.match.teamB1HScore ? this.match.teamB1HScore : 0,
                teamB2HScore: this.match.teamB2HScore ? this.match.teamB2HScore : 0,
                referee: this.match.referee ? this.match.referee : '',
                assistantRef: this.match.assistantRef ? this.match.assistantRef : '',
                timeKeeper1: this.match.timeKeepers ? this.match.timeKeepers.split(',')[0] : '',
                timeKeeper2: this.match.timeKeepers ? this.match.timeKeepers.split(',')[1] : ''
            },
            matchPlayerAForm: [
                {
                    id: 1,
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
            ],
            matchPlayerBForm: [
                {
                    id: 1,
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
            ]
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addMatch', 'editMatch']),
        submitHandler() {
            if (this.matchFormType === 'add-match') {
                this.addMatch({
                    placeName: this.matchForm.placeName,
                    placeImgUrl: this.matchForm.placeImgUrl,
                    teamA: this.matchForm.teamA,
                    teamB: this.matchForm.teamB,
                    overview: this.matchForm.overview,
                    date: this.matchForm.date,
                    time: this.matchForm.timeHr + '.' + this.matchForm.timeMn,
                    fulltime: this.matchForm.fulltime,
                    teamALogo: this.matchForm.teamALogo,
                    teamBLogo: this.matchForm.teamBLogo,
                    teamAScore: this.matchForm.teamAScore,
                    teamBScore: this.matchForm.teamBScore,
                    highlightUrl: this.matchForm.highlightUrl,
                    insightImgUrl: this.matchForm.insightImgUrl,
                    insightVideoUrl: this.matchForm.insightVideoUrl,
                    insightDate: this.matchForm.insightDate,
                    insightTime: this.matchForm.insightTimeHr + '.' + this.matchForm.insightTimeMn,
                    insightLeague: this.matchForm.insightLeague,
                    insightSeason: this.matchForm.insightSeason,
                    insightFulltime: this.matchForm.insightFulltime,
                    locationUrl: this.matchForm.locationUrl,
                    gmapIframe: this.matchForm.gmapIframe,
                    teamA1HScore: this.matchForm.teamA1HScore,
                    teamA2HScore: this.matchForm.teamA2HScore,
                    teamB1HScore: this.matchForm.teamB1HScore,
                    teamB2HScore: this.matchForm.teamB2HScore,
                    referee: this.matchForm.referee,
                    assistantRef: this.matchForm.assistantRef,
                    timeKeepers: this.matchForm.timeKeeper1 + ',' + this.matchForm.timeKeeper2,
                    MatchPlayers: [...this.matchPlayerAForm, ...this.matchPlayerBForm]
                })
            } else {
                this.editMatch(
                    {
                        placeName: this.matchForm.placeName,
                        placeImgUrl: this.matchForm.placeImgUrl,
                        teamA: this.matchForm.teamA,
                        teamB: this.matchForm.teamB,
                        overview: this.matchForm.overview,
                        date: this.matchForm.date,
                        time: this.matchForm.timeHr + '.' + this.matchForm.timeMn,
                        fulltime: this.matchForm.fulltime,
                        teamALogo: this.matchForm.teamALogo,
                        teamBLogo: this.matchForm.teamBLogo,
                        teamAScore: this.matchForm.teamAScore,
                        teamBScore: this.matchForm.teamBScore,
                        highlightUrl: this.matchForm.highlightUrl,
                        insightImgUrl: this.matchForm.insightImgUrl,
                        insightVideoUrl: this.matchForm.insightVideoUrl,
                        insightDate: this.matchForm.insightDate,
                        insightTime: this.matchForm.insightTimeHr + '.' + this.matchForm.insightTimeMn,
                        insightLeague: this.matchForm.insightLeague,
                        insightSeason: this.matchForm.insightSeason,
                        insightFulltime: this.matchForm.insightFulltime,
                        locationUrl: this.matchForm.locationUrl,
                        gmapIframe: this.matchForm.gmapIframe,
                        teamA1HScore: this.matchForm.teamA1HScore,
                        teamA2HScore: this.matchForm.teamA2HScore,
                        teamB1HScore: this.matchForm.teamB1HScore,
                        teamB2HScore: this.matchForm.teamB2HScore,
                        referee: this.matchForm.referee,
                        assistantRef: this.matchForm.assistantRef,
                        timeKeepers: this.matchForm.timeKeeper1 + ',' + this.matchForm.timeKeeper2
                    },
                    this.matchForm.id
                )

                this.matchForm.placeName = ''
                this.matchForm.placeImgUrl = ''
                this.matchForm.teamA = ''
                this.matchForm.teamB = ''
                this.matchForm.overview = ''
                this.matchForm.date = ''
                this.matchForm.timeHr = '00'
                this.matchForm.timeMn = '00'
                this.matchForm.fulltime = ''
                this.matchForm.teamALogo = ''
                this.matchForm.teamBLogo = ''
                this.matchForm.teamAScore = 0
                this.matchForm.teamBScore = 0
                this.matchForm.highlightUrl = ''
                this.matchForm.insightImgUrl = ''
                this.matchForm.insightVideoUrl = ''
                this.matchForm.insightDate = ''
                this.matchForm.insightTimeHr = '00'
                this.matchForm.insightTimeMn = '00'
                this.matchForm.insightLeague = ''
                this.matchForm.insightSeason = 0
                this.matchForm.insightFulltime = 0
                this.matchForm.locationUrl = ''
                this.matchForm.gmapIframe = ''
                this.matchForm.teamA1HScore = 0
                this.matchForm.teamA2HScore = 0
                this.matchForm.teamB1HScore = 0
                this.matchForm.teamB2HScore = 0
                this.matchForm.referee = ''
                this.matchForm.assistantRef = ''
                this.matchForm.timeKeeper1 = ''
                this.matchForm.timeKeeper2 = ''
            }
        },
        cancelAction() {
            this.$router.push(`/matches`)

            this.matchForm.placeName = ''
            this.matchForm.placeImgUrl = ''
            this.matchForm.teamA = ''
            this.matchForm.teamB = ''
            this.matchForm.overview = ''
            this.matchForm.date = ''
            this.matchForm.timeHr = '00'
            this.matchForm.timeMn = '00'
            this.matchForm.fulltime = ''
            this.matchForm.teamALogo = ''
            this.matchForm.teamBLogo = ''
            this.matchForm.teamAScore = 0
            this.matchForm.teamBScore = 0
            this.matchForm.highlightUrl = ''
            this.matchForm.insightImgUrl = ''
            this.matchForm.insightVideoUrl = ''
            this.matchForm.insightDate = ''
            this.matchForm.insightTimeHr = '00'
            this.matchForm.insightTimeMn = '00'
            this.matchForm.insightLeague = ''
            this.matchForm.insightSeason = 0
            this.matchForm.insightFulltime = 0
            this.matchForm.locationUrl = ''
            this.matchForm.gmapIframe = ''
            this.matchForm.teamA1HScore = 0
            this.matchForm.teamA2HScore = 0
            this.matchForm.teamB1HScore = 0
            this.matchForm.teamB2HScore = 0
            this.matchForm.referee = ''
            this.matchForm.assistantRef = ''
            this.matchForm.timeKeeper1 = ''
            this.matchForm.timeKeeper2 = ''
        },
        handleAddA(id) {
            this.matchPlayerAForm = [
                ...this.matchPlayerAForm,
                {
                    id: id + 1,
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
            ]
        },
        handleAddB(id) {
            this.matchPlayerBForm = [
                ...this.matchPlayerBForm,
                {
                    id: id + 1,
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
            ]
        },
        handleSubstractA() {
            if (this.matchPlayerAForm.length > 1) {
                this.matchPlayerAForm.pop()
            }
        },
        handleSubstractB() {
            if (this.matchPlayerBForm.length > 1) {
                this.matchPlayerBForm.pop()
            }
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="matchFormType === 'add-match'" class="my-3">
                <h2 class="m-0">Add New Match</h2>
                <hr />
            </div>
            <div v-if="matchFormType === 'edit-match'" class="my-3">
                <h2 class="m-0">Edit Match</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="placeName" class="form-label col-3 m-0">Venue Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.placeName"
                                type="text"
                                class="form-control"
                                id="placeName"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="overview" class="form-label col-3 mb-0 mt-2">Overview</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="matchForm.overview"
                                class="form-control"
                                id="overview"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="matchDate" class="form-label col-3 m-0">Date</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.date"
                                type="date"
                                class="form-control"
                                id="matchDate"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="matchTime" class="form-label col-3 m-0">Time</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <div class="d-flex align-items-end">
                                <select
                                    v-model="matchForm.timeHr"
                                    class="form-select"
                                    aria-label="MatchTime select"
                                    id="matchTime"
                                >
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                </select>
                                <div class="colon mx-2 mb-1">.</div>
                                <select
                                    v-model="matchForm.timeMn"
                                    class="form-select"
                                    aria-label="MatchTimeMn select"
                                    id="matchTime"
                                >
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="fulltime" class="form-label col-3 m-0">Fulltime</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <select
                                v-model="matchForm.fulltime"
                                class="form-select py-1"
                                aria-label="Fulltime select"
                                id="fulltime"
                            >
                                <option value="Fulltime">Fulltime</option>
                                <option value="Extra Time">Extra Time</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto">
                        <label for="gmapIframe" class="form-label col-3 m-0"
                            >Google Map Iframe</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.gmapIframe"
                                type="text"
                                class="form-control"
                                id="gmapIframe"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto">
                        <label for="locationUrl" class="form-label col-3 m-0">Location URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.locationUrl"
                                type="text"
                                class="form-control"
                                id="locationUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto">
                        <label for="highlightUrl" class="form-label col-3 m-0">Highlight URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.highlightUrl"
                                type="text"
                                class="form-control"
                                id="highlightUrl"
                            />
                        </div>
                    </div>
                    <div class="mb-1 mt-5 col-12 mx-auto ms-5 p-1">
                        <h5>TEAM A</h5>
                        <hr class="col-2"/>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamA" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamA"
                                type="text"
                                class="form-control"
                                id="teamA"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamALogo" class="form-label col-3 m-0">Logo</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamALogo"
                                type="text"
                                class="form-control"
                                id="teamALogo"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamAScore" class="form-label col-3 m-0">Score</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamAScore"
                                type="number"
                                class="form-control input-right"
                                id="teamAScore"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamA1HScore" class="form-label col-3 m-0"
                            >1st-Half Score</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamA1HScore"
                                type="number"
                                class="form-control input-right"
                                id="teamA1HScore"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamA2HScore" class="form-label col-3 m-0"
                            >2nd-Half Score</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamA2HScore"
                                type="number"
                                class="form-control input-right"
                                id="teamA2HScore"
                            />
                        </div>
                    </div>
                    <!-- Button Trigger Player Activity Modal -->
                    <button
                        v-if="matchFormType === 'add-match'"
                        type="button"
                        class="btn btn-warning btn-add-pa ms-5"
                        data-bs-toggle="modal"
                        data-bs-target="#matchPlayerAModal"
                    >
                        Add Team A Player Activities
                    </button>
                    <!-- End Button Trigger -->
                    <div class="mb-1 mt-5 col-12 mx-auto ms-5 p-1">
                        <h5>TEAM B</h5>
                        <hr class="col-2"/>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamB" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamB"
                                type="text"
                                class="form-control"
                                id="teamB"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamBLogo" class="form-label col-3 m-0">Logo URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamBLogo"
                                type="text"
                                class="form-control"
                                id="teamBLogo"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamBScore" class="form-label col-3 m-0">Score</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamBScore"
                                type="number"
                                class="form-control input-right"
                                id="teamBScore"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamA1HScore" class="form-label col-3 m-0"
                            >1st-Half Score</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamB1HScore"
                                type="number"
                                class="form-control input-right"
                                id="teamB1HScore"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="teamA2HScore" class="form-label col-3 m-0"
                            >2nd-Half Score</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.teamB2HScore"
                                type="number"
                                class="form-control input-right"
                                id="teamB2HScore"
                            />
                        </div>
                    </div>
                    <!-- Button Trigger Player Activity Modal -->
                    <button
                        v-if="matchFormType === 'add-match'"
                        type="button"
                        class="btn btn-warning btn-add-pa  ms-5"
                        data-bs-toggle="modal"
                        data-bs-target="#matchPlayerBModal"
                    >
                        Add Team B Player Activities
                    </button>
                    <!-- End Button Trigger -->
                </div>
                <div class="col-6">
                    <div class="mb-4 col-12 mx-auto">
                        <h5>INSIGHT</h5>
                        <hr class="col-2"/>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightImgUrl" class="form-label col-3 m-0">Image URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightImgUrl"
                                type="text"
                                class="form-control"
                                id="insightImgUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightVideoUrl" class="form-label col-3 m-0">Video URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightVideoUrl"
                                type="text"
                                class="form-control"
                                id="insightVideoUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightDate" class="form-label col-3 m-0"
                            >Insight Date</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightDate"
                                type="date"
                                class="form-control"
                                id="insightDate"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto"
                    >
                        <label for="insightTime" class="form-label col-3 m-0">Insight Time</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <div class="d-flex align-items-end">
                                <select
                                    v-model="matchForm.insightTimeHr"
                                    class="form-select"
                                    aria-label="InsightTime select"
                                    id="insightTime"
                                >
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                </select>
                                <div class="colon mx-2 mb-1">.</div>
                                <select
                                    v-model="matchForm.insightTimeMn"
                                    class="form-select"
                                    aria-label="InsightTimeMn select"
                                    id="insightTime"
                                >
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightLeague" class="form-label col-3 m-0"
                            >League</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightLeague"
                                type="text"
                                class="form-control"
                                id="insightLeague"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightSeason" class="form-label col-3 m-0"
                            >Season</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightSeason"
                                type="number"
                                class="form-control input-right"
                                id="insightSeason"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="insightFulltime" class="form-label col-3 m-0"
                            >Insight Fulltime</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.insightFulltime"
                                type="number"
                                class="form-control input-right"
                                id="insightFulltime"
                            />
                        </div>
                    </div>
                    <div class="mb-4 mt-5 col-12 mx-auto">
                        <h5>TRAINERS</h5>
                        <hr class="col-2"/>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="referee" class="form-label col-3 m-0"
                            >Referee</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.referee"
                                type="text"
                                class="form-control"
                                id="referee"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="assistantRef" class="form-label col-3 m-0"
                            >Assistant Referee</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.assistantRef"
                                type="text"
                                class="form-control"
                                id="assistantRef"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="timeKeeper1" class="form-label col-3 m-0"
                            >TimeKeeper 1</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.timeKeeper1"
                                type="text"
                                class="form-control"
                                id="timeKeeper1"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="timeKeeper2" class="form-label col-3 m-0"
                            >TimeKeeper 2</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="matchForm.timeKeeper2"
                                type="text"
                                class="form-control"
                                id="timeKeeper2"
                            />
                        </div>
                    </div>
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

    <!-- PLAYER A ACTIVITY MODAL -->
    <div
        class="modal fade"
        id="matchPlayerAModal"
        tabindex="-1"
        aria-labelledby="paModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paModalLabel">Input Player A Activity</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-center form-header">
                        <div class="col-2 px-2">
                            <div class="ps-3 mb-2">
                                <label for="paClub"><b>Club</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paName"><b>Name</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paNumber"><b>Number</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paGoals"><b>Goals</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paOwnGoals"><b>Own Goals</b></label>
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
                    </div>
                    <div
                        v-for="matchPly in matchPlayerAForm"
                        :key="matchPly.id"
                        class="d-flex mt-2 mb-2"
                    >
                        <div class="d-flex align-items-center px-auto">                           
                            <div class="col-2 px-2">
                                <input
                                    v-model="matchPly.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerName"
                                    class="form-control py-1"
                                    type="text"
                                    id="paName"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerNumber"
                                    class="form-control py-1"
                                    type="number"
                                    id="paNumber"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerPosition"
                                    class="form-control py-1"
                                    type="text"
                                    id="paPosition"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerOwnGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paOwnGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerAssists"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAssists"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerYellowCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paYellowCards"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerRedCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                        </div>
                        <div class="d-flex align-items-end ms-1 mb-1">
                            <button
                                class="btn btn-success me-1 btn-pa-handler"
                                type="button"
                                @click.prevent="handleAddA(matchPly.id)"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                            <button
                                class="btn btn-danger btn-pa-handler"
                                type="button"
                                @click.prevent="handleSubstractA()"
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

    <!-- PLAYER B ACTIVITY MODAL -->
    <div
        class="modal fade"
        id="matchPlayerBModal"
        tabindex="-1"
        aria-labelledby="paModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="paModalLabel">Input Player B Activity</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-center form-header">
                        <div class="col-2 px-2">
                            <div class="ps-3 mb-2">
                                <label for="paClub"><b>Club</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paName"><b>Name</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paNumber"><b>Number</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paGoals"><b>Goals</b></label>
                            </div>
                        </div>
                        <div class="col px-2">
                            <div class="d-flex justify-content-center mb-2">
                                <label for="paOwnGoals"><b>Own Goals</b></label>
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
                    </div>
                    <div
                        v-for="matchPly in matchPlayerBForm"
                        :key="matchPly.id"
                        class="d-flex mt-2 mb-2"
                    >
                        <div class="d-flex align-items-center px-auto">                           
                            <div class="col-2 px-2">
                                <input
                                    v-model="matchPly.club"
                                    class="form-control py-1"
                                    type="text"
                                    id="paClub"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerName"
                                    class="form-control py-1"
                                    type="text"
                                    id="paName"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerNumber"
                                    class="form-control py-1"
                                    type="number"
                                    id="paNumber"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerPosition"
                                    class="form-control py-1"
                                    type="text"
                                    id="paPosition"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerOwnGoals"
                                    class="form-control py-1"
                                    type="number"
                                    id="paOwnGoals"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerAssists"
                                    class="form-control py-1"
                                    type="number"
                                    id="paAssists"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerYellowCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paYellowCards"
                                />
                            </div>
                            <div class="col px-2">
                                <input
                                    v-model="matchPly.playerRedCards"
                                    class="form-control py-1"
                                    type="number"
                                    id="paRedCards"
                                />
                            </div>
                        </div>
                        <div class="d-flex align-items-end ms-1 mb-1">
                            <button
                                class="btn btn-success me-1 btn-pa-handler"
                                type="button"
                                @click.prevent="handleAddB(matchPly.id)"
                            >
                                <i class="bi bi-plus-lg"></i>
                            </button>
                            <button
                                class="btn btn-danger btn-pa-handler"
                                type="button"
                                @click.prevent="handleSubstractB()"
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
