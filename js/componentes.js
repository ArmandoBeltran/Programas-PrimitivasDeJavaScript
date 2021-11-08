Vue.component("information",
{
    props: ['type', 'result'], 
    template: "#message", 
    methods: {
        showOrNotInfo: function ()
        {
            this.$emit('hide');
        }
    }, 
    data ()
    {
        return {
            card: this.result,
        }
    }
}); 


const app = new Vue 
({
    el: '#form', 
    data: {
        name: '',
        age: 0, 
        email: '', 
        description: '', 
        isSuccessful: false, 
        isUnsuccessful: false,
    }, 
    methods: {
        dataConfirmation: function ()
        {
            this.isUnsuccessful = false;
            this.isSuccessful = false;
            if (this.name && this.age && this.email && this.description && this.description.length > 49)
            {
                this.isSuccessful = true; 
                this.name = ''; 
                this.age = 0; 
                this.email = ''; 
                this.description = '';
                
            }
            else
            {
                this.isUnsuccessful = true; 
            }
        }
    }
}); 