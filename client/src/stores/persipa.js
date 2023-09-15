import { defineStore } from 'pinia'

export const usePersipaStore = defineStore('persipa', {
  state: () => ({
    playersObj: {},
    player: {},
    isLogin: false,
    baseUrl: 'http://localhost:3000',
    galleriesObj: {},
    gallery: {},
    eventsObj: {},
    event: {},
    matchesObj: {},
    match: {},
    newsObj: {},
    news: {},
    categoriesObj: {},
    category: {},
    tagsObj: {},
    tag: {},
    managementsObj: {},
    management: {},
  }),
  actions: {
    async loginHandler(value) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/users/login',
          data: value
        });
        localStorage.access_token = data.access_token;
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error);
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.router.push('/login');
      this.isLogin = false;
    },
    async fetchPlayers() {
      try {
        console.log(">>> IN FETCH PLAYERS")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/players',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.playersObj = data;
        console.log(">>> PLAYERS OBJ", this.playersObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPlayerById(id) {
      try {
          console.log('IN FETCH BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/players/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.player = data
          console.log(this.player.id)
          this.router.push(`/edit-player/${this.player.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addPlayer(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/players',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editPlayer(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/players/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async addPlayerAct(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + `/players/activities/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editPlayerAct(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/players/activities/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deletePlayerById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/players/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deletePAById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/players/activities/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchGalleries() {
      try {
        console.log(">>> IN FETCH GALLERIES")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/galleries',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.galleriesObj = data;
        console.log(">>> GALLERIES OBJ", this.galleriesObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchGalleryById(id) {
      try {
          console.log('IN FETCH GALLERY BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/galleries/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.gallery = data
          this.router.push(`/edit-gallery/${this.gallery.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addGallery(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/galleries',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchGalleries();
        this.router.push('/galleries');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editGallery(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/galleries/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchGalleries();
        this.router.push('/galleries');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteGalleryById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/galleries/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchGalleries();
        this.router.push('/galleries');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchEvents() {
      try {
        console.log(">>> IN FETCH EVENTS")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/events',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.eventsObj = data;
        console.log(">>> EVENTS OBJ", this.eventsObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchEventById(id) {
      try {
          console.log('IN FETCH EVENT BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/events/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.event = data
          this.router.push(`/edit-event/${this.event.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addEvent(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/events',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchEvents();
        this.router.push('/events');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editEvent(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/events/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchEvents();
        this.router.push('/events');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteEventById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/events/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchEvents();
        this.router.push('/events');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMatches() {
      try {
        console.log(">>> IN FETCH MATCHES")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/matches',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.matchesObj = data;
        console.log(">>> MATCHES OBJ", this.matchesObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMatchById(id) {
      try {
          console.log('IN FETCH MATCH BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/matches/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.match = data
          console.log(this.match.id)
          this.router.push(`/edit-match/${this.match.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addMatch(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/matches',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editMatch(value, id) {
      try {
        console.log('>>> IN EDIT MATCH')
        console.log(value)
        console.log('ID', id)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/matches/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async addMatchPly(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + `/matches/players/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editMatchPly(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/matches/players/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteMatchById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/matches/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteMatchPlyById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/matches/players/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchMatches();
        this.router.push('/matches');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchNews() {
      try {
        console.log(">>> IN FETCH NEWS")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/news',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.newsObj = data;
        console.log(">>> NEWS OBJ", this.newsObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchNewsById(id) {
      try {
          console.log('IN FETCH NEWS BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/news/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.news = data
          console.log(this.news.id)
          this.router.push(`/edit-news/${this.news.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addNews(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/news',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchNews();
        this.router.push('/news');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editNews(value, id) {
      try {
        console.log('>>> IN EDIT NEWS')
        console.log(value)
        console.log('ID', id)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/news/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchNews();
        this.router.push('/news');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async addNewsTag(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + `/news/tags/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchNews();
        this.router.push('/news');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteNewsById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/news/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchNews();
        this.router.push('/news');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteNewsTag(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/news/tags/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchNews();
        this.router.push('/news');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchCategories() {
      try {
        console.log(">>> IN FETCH CATEGORIES")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/categories',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.categoriesObj = data;
        console.log(">>> CATEGORIES OBJ", this.categoriesObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchCategoryById(id) {
      try {
          console.log('IN FETCH CATEGORY BY ID')
          const { data } = await axios({
              method: 'get',
              url: this.baseUrl + `/categories/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.category = data
          console.log(this.category.id)
          // this.router.push(`/edit-category/${this.news.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addCategory(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/categories',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchCategories();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editCategory(value, id) {
      try {
        console.log('>>> IN EDIT CATEGORY')
        console.log(value)
        console.log('ID', id)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/categories/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchCategories();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteCategory(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/categories/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchCategories();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTags() {
      try {
        console.log(">>> IN FETCH TAGS")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/tags',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.tagsObj = data;
        console.log(">>> TAGS OBJ", this.tagsObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTagById(id) {
      try {
          console.log('IN FETCH TAG BY ID')
          const { data } = await axios({
              method: 'get',
              url: this.baseUrl + `/tags/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.tag = data
          console.log(this.tag.id)
          // this.router.push(`/edit-category/${this.news.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addTag(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/tags',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchTags();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editTag(value, id) {
      try {
        console.log('>>> IN EDIT TAG')
        console.log(value)
        console.log('ID', id)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/tags/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchTags();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTag(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/tags/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchTags();
        this.router.push('/categories');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async addAdmin(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/admins/register',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchPlayers();
        this.router.push('/');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchManagements() {
      try {
        console.log(">>> IN FETCH MANAGEMENTS")
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/managements',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.managementsObj = data;
        console.log(">>> MANAGEMENTS OBJ", this.managementsObj)
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async fetchManagementById(id) {
      try {
          console.log('IN FETCH BY ID')
          const { data } = await axios({
              method: 'get',
              url: 'http://localhost:3000' + `/managements/${id}`,
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          })
          console.log(data)
          this.management = data
          console.log(this.management.id)
          this.router.push(`/edit-management/${this.management.id}`)
      } catch (error) {
          console.log(error)
      }
    },
    async addManagement(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/managements',
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchManagements();
        this.router.push('/managements');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async editManagement(value, id) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'put',
          url: this.baseUrl + `/managements/${id}`,
          data: value,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.fetchManagements();
        this.router.push('/managements');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
    async deleteManagementById(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + `/managements/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.fetchManagements();
        this.router.push('/managements');
        this.isLogin = true;
      } catch (error) {
        console.log(error)
      }
    },
  }
})
