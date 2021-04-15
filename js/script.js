// Attraverso l'apposita API di Boolean generare 10 indirizzi email
// e stamparli in pagina all'interno di una lista.

    function emailGenerator() {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            method: 'GET',
            success: function(data) {
                const res = data.response;
                generateEmail(res);
            },
            error: function() {
                console.log('error');
            }
        });
    }


    function generateEmail(value) {
            const box = $('#box');
            box.append('<ul><li>' + value + '</li></ul>');
    }

    // elenco mail RND
    function emailList(){
        for(let i=0; i<10; i++){
            emailGenerator();
        }
    }

    function init() {
     emailList();

    }
    document.addEventListener('DOMContentLoaded', init);