document.getElementById('btn-update')
        .addEventListener('click', function(){
            // console.log('click btn');
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = 'update page title.'
        })
