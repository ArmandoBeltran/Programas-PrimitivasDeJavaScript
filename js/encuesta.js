new Vue
({
    el: '#survey',
    data: {
        fAnswer: '',
        timeCoding: 0,
        motivation: '',
        experience: '',
        codingLanguage: '',
        codingLanguages: [],
        showSummary: false,
        nLanguages: 0,
    }, 
    methods: {
        add: function ()
        {
            this.codingLanguages.push(this.codingLanguage);
            this.codingLanguage = '';
            this.nLanguages ++;
        },
        confirm: function ()
        {
            this.showSummary =! this.showSummary;
        }     
    }
});

