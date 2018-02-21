import vue from 'vue'
import axios from 'axios'
vue.prototype.$http = axios
export default axios
