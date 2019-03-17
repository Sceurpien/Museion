new Vue({
    el: '#form',
    data: {
        UserName: '',
        Password: '',
        Institut: ''
    },
    computed: {
        isSubmitDisabled() {
            let isDisabled = true;

            if (
                this.UserName !== '' &&
                this.Password !== '' &&
                this.Institut !== ''
            ) {
                isDisabled = false;
            }

            return isDisabled;
        }
    },
    methods: {
        SubmitForm() {
            let submit = true;

            if (submit) {
                axios({
                    method: 'post',
                    url: '/Login/LoggingIn',
                    data: { "Fields": this.$data }
                }).then(res => {
                    this.$refs.SubmitButton.setAttribute("disabled", "disabled");
                }).catch(err => {
                });
            }
        }
    }
});