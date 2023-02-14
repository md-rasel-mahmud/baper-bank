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
        if (userName.value === 'baper@bank.com' && password.value === 'secret') {
            //Select login page and dashboard page
            const login = document.getElementById('login');
            const dashboard = document.getElementById('dashboard');

            login.classList.remove('flex')
            login.classList.add('hidden');

            dashboard.classList.remove('hidden')
            dashboard.classList.add('block')
        } else {
            document.getElementById('warning').innerText = '⚠ Invalid Username or Password '
        }

    })

    /*=================================================================*/

    //Secound Todo for Baper Bank dashboard

    /*
        =>Here is some steps of seceound To DO
            1. First of all we need to select all items and store them  into variables
            2. Run event listener to deposite submit button
            3. Event for Deposite Button         
            4. Select Deposite Input and convert it to Number
            5. Select Deposite ooutput convert it to Number
            6. Show Deposite Output
            7. Event for Withdraw Button         
            8. Select Withdraw Input and convert it to Number
            9. Select Withdraw ooutput convert it to Number
            10. Show Withdraw Output


    */

    //step-1
    const depositeSubmit = document.getElementById('deposite-submit');

    // select total amount and store it as a global variable
    const mainBalance = document.getElementById('main-balance');

        //step-2 Event for Deposite Button
        depositeSubmit.addEventListener('submit', function (e) {
            e.preventDefault()
            //step-3 Select Deposite Input and convert it to Number
            const depositeInput = document.getElementById('deposite-input');
            const convrtDepoInput = parseFloat(depositeInput.value);

            //step-4 Select Deposite ooutput convert it to Number
            const depositeOutput = document.getElementById('deposite-output');
            const convrtDepoOutput = parseFloat(depositeOutput.innerText)
            
            
            // validation input data type
            if (isNaN(convrtDepoInput)) {

                alert('The input value is not valid');

                //delete input value
                depositeInput.value = '';
            }else{
                //step-5 Show Deposite Output
                depositeOutput.innerText = convrtDepoInput + convrtDepoOutput;

                //step-6 Update main Balance and reset input value
                const depoMainBalance = parseFloat(mainBalance.innerText);
                mainBalance.innerText = depoMainBalance + convrtDepoInput;

                depositeInput.value = '';
            }

        })

    //select withdraw submit button
    const withdrawSubmit = document.getElementById('withdraw-submit');
        //Event for Withdraw Button
        withdrawSubmit.addEventListener('submit', function (e) {
            e.preventDefault()

            //step-7 Select Withdraw Input and convert it to Number
            const withdrowInput = document.getElementById('withdraw-input');
            const convrtWthdrawInput = parseFloat(withdrowInput.value);

            //step-8 Select Withdraw ooutput convert it to Number
            const withdrawOutput = document.getElementById('withdraw-output');
            const convrtWthdrawOutput = parseFloat(withdrawOutput.innerText)

            
            const wthdrawMainBalance = parseFloat(mainBalance.innerText);

            console.log()
            // validation input data type
            if (isNaN(convrtWthdrawInput)) {

                alert('The input value is not valid');
                
                //delete input value
                withdrowInput.value = '';
            }else{

                if (convrtWthdrawInput>wthdrawMainBalance) {
                    alert('Sorry! Insufficient Balance');
                }else{
                    //step-9 Show Withdraw Output
                    withdrawOutput.innerText = convrtWthdrawInput + convrtWthdrawOutput;
                    
                    //step-10 Update main Balance and reset input value
                    mainBalance.innerText = wthdrawMainBalance - convrtWthdrawInput;

                    //delete input value
                    withdrowInput.value = '';
                }
            }
            

            
        })

