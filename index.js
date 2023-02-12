    // First To Do for login varifiy
    /*
        =>Here is some steps of seceound To DO
            1. Select login submit button and run event listener
            2. select input filds
            3. Run condition for verify user
            4. If user enter the valid info and hit enter then show baper bank dashboard, otherwise show an warning
    */

    //Step-1
    const loginSubmit = document.getElementById('login-submit');

    loginSubmit.addEventListener('submit', function (e) {
        //stop whole site reloding for clicking submit button
        e.preventDefault();

        // Step-2
        const userName = document.getElementById('userName');
        const password = document.getElementById('password');

        //step-3
        if (userName.value === 'hero' && password.value === 'secret') {
            //Select login page and dashboard page
            const login = document.getElementById('login');
            const dashboard = document.getElementById('dashboard');

            login.classList.add('hidden');
            dashboard.classList.add('block')
        } else {
            document.getElementById('warning').innerText = '⚠ Invalid Username or Password '
        }

    })

    /*=================================================================*/

    //Secound Todo

    /*
        =>Here is some steps of seceound To DO
            1. First of all we need to select all items and store them  into variables
            2. Run event listener to deposite submit button

    */

    //step-1
    const depositeSubmit = document.getElementById('deposite-submit');

    // select total amount and store it as a global variable
    const mainBalance = document.getElementById('main-balance');

        //Event for Deposite Button
        depositeSubmit.addEventListener('submit', function (e) {
            e.preventDefault()
            const depositeInput = document.getElementById('deposite-input');
            const convrtDepoInput = parseFloat(depositeInput.value);


            const depositeOutput = document.getElementById('deposite-output');
            const convrtDepoOutput = parseFloat(depositeOutput.innerText)

            depositeOutput.innerText = convrtDepoInput + convrtDepoOutput;

            const depoMainBalance = parseFloat(mainBalance.innerText);
            mainBalance.innerText = depoMainBalance + convrtDepoInput;
            depositeInput.value = '';
        })

    //select withdraw submit button
    const withdrawSubmit = document.getElementById('withdraw-submit');
        //Event for Deposite Button
        withdrawSubmit.addEventListener('submit', function (e) {
            e.preventDefault()
            const withdrowInput = document.getElementById('withdraw-input');
            const convrtWthdrawInput = parseFloat(withdrowInput.value);


            const withdrawOutput = document.getElementById('withdraw-output');
            const convrtWthdrawOutput = parseFloat(withdrawOutput.innerText)

            withdrawOutput.innerText = convrtWthdrawInput + convrtWthdrawOutput;

            const wthdrawMainBalance = parseFloat(mainBalance.innerText);
            mainBalance.innerText = wthdrawMainBalance - convrtWthdrawInput;
            withdrowInput.value = '';
        })