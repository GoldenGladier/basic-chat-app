import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faHome, faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faHome,
    faPaperPlane,
    faSearch,
    faExclamationCircle,
    )

Vue.component('font-awesome-icon', FontAwesomeIcon)