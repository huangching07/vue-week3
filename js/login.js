import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.prod.min.js';

const app = {
    // 資料
    data(){
        return{
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'ching',
            user: {
                username: '',
                password: ''
            }
        }
    },
    // 方法
    methods:{
        login(){
            axios.post(`${this.apiUrl}/admin/signin`, this.user)
                .then((res) => {
                    alert(res.data.message);
                    const { token, expired } = res.data; // 取得登入成功之後產生的token跟expired
                    document.cookie = `hexschool=${token}; expires=${new Date(expired)}`; // 儲存token
                    window.location.href = "./admin.html"; // 跳轉到後台
                })
                .catch((error) => {
                    alert(error.response.data.message);
                })
        }
    },
    // 生命週期（元件開始時執行）
    mounted(){
        
    }
};

createApp(app).mount('#app');