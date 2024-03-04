<template>
    <!-- Contact Form -->
    <div id="contact-form" class="parallax-testimonials" style="background: url(/images/parallax-main.jpg) fixed">
        
        <div class="modal-contact" v-if="show_hide_modal" @click="show_hide_modal=false">
            <div class="circle" v-html="modal"></div>
        </div>
        
        <div class="container module"> x
            
            <Title :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></Title>
            
            <div class="content">
                <SubTitle :subtitle='subtitle' color='red' v-if="show_hide_subtitle"></SubTitle>
                
                <form ref="anyName" action="#" @submit.prevent="submitForm">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" id="email_name" v-model="email_name">
                    </div>
                    <div class="form-group">
                        <label>Email address:</label>
                        <input type="email" class="form-control" id="email_email" v-model="email_email">
                    </div>
                    <div class="form-group">
                        <label>Message:</label>
                        <textarea class="form-control" id="email_message" rows="3" v-model="email_message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import Title from "./subComponents/Title"
import SubTitle from "./subComponents/SubTitle"
import axios from 'axios'
import * as EmailValidator from 'email-validator'

export default {
    name: "RangeOfServices",
    data() {
        return {
            color: 'white',
            title: "Send me a message",
            subtitle: "",
            modal: "",
            email_name: 'Kumar Desai',
            email_email: 'kumardesai123@smail.com',
            email_message: 'test',
            // email_name: '',
            // email_email: '',
            // email_message: '',
            list: [],
            show_hide_modal: false,
            show_hide_subtitle: false,
            faParent: 'fa-solid', 
            faIcon: 'fa-at'
        };
    },
    components: {
        Title,
        SubTitle
    },
    computed: {
    },
    mounted() {
    },
    created() {
        this.getPageData (432);

    },
    methods: {
        submitForm (e) {
            if (this.validateForm()) {
                const url = 'https://www.kumardesai.com/email-form-post.php';
                axios({
                    method: 'post',
                    url: url,
                    data: {
                        email_name: email_name.value,
                        email_email: email_email.value,
                        email_message: email_message.value
                    }
                }).then((r, error)=>{
                    if (r) {
                        this.show_hide_modal = true;
                        this.show_hide_subtitle = false;
                        this.email_name='';
                        this.email_email='';
                        this.email_message='';
                        
                        setTimeout(()=>{ 
                            this.show_hide_modal = false;
                        }, 5000);
                    }
                })
            } else {
                this.show_hide_subtitle = true;
            }
        },
        validateForm: () => {
            let errorsFound = [];
            
            if (email_name.value==="") {
                errorsFound.push(email_name);
            } 
            
            if (email_email.value==="") {
                errorsFound.push(email_email);
            } else if (!EmailValidator.validate(email_email.value)) {
                errorsFound.push(email_email);
            }
            
            if (email_message.value==="") {
                errorsFound.push(email_message);
            } 

            if (errorsFound.length) {
                errorsFound.forEach((i)=>{
                    i.classList.add('highlight');
                    i.addEventListener('focus', (e)=>{
                        e.target.classList.remove('highlight');
                    })
                })
                return false;
            } else {
                return true;
            }

        },
        getPageData: async function (id) {

            const response = await fetch ("https://www.kumardesai.com/wp-json/wp/v2/pages/"+id)
            const page_data = await response.json();
            
            //Page
            this.title = page_data.title.rendered;
            this.subtitle = page_data.content.rendered;

            //ACF
            const contact_form = page_data.acf;
            this.modal = contact_form.thank_you_message;

        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/styles.scss';
@import '../assets/scss/mixins.scss';

#contact-form {
    position: relative;

    .modal-contact {
        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        background-color:rgba(0,0,0,0.3);
        padding: 20px;
        
        .circle {
            animation: lds-circle 1s cubic-bezier(0, 0.2, 0.8, 1);
            border-radius:50%;
            border: 3px solid $darkblue;;
            max-height: 88%;
            aspect-ratio: 1;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin:auto;
            p {
                font-size: 22px;
                color: $darkblue;
                padding: 20px;
                text-align: center;
                line-height: 130%;
                b {
                    font-size:40px;
                    display: block;
                    margin-bottom: 23px;
                }
            }
        }
    }
    @keyframes lds-circle {
        0%, 100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
        }
        100% {
            transform: rotateY(3600deg);
        }
    }
    
    .content {
        text-align: center;
        padding: 0 20px;
        .subtitle {
            color: $red;
            background-color: $white;
            border-radius: 20px;
            padding: 5px 20px;
            max-width: 650px;
            margin:20px auto;
        }
        
        form {
            padding-top: 0;
            max-width: 650px;
            margin:auto;
            .form-group {
                padding-bottom: 20px;
                label {
                    font-size: 18px;
                    color: $white;
                    text-align: left;
                    display: block;
                    margin-left: 4px;
                }
                .form-control {
                    border: 4px solid $darkblue;
                    width: 100%;
                    &.highlight {
                        border: 4px solid $red;
                    }
                }

            }
            .btn-primary {
                background-color: $darkblue;
                border-color: $white;
                font-weight: bold;
            }
        }
    }
}

</style>
