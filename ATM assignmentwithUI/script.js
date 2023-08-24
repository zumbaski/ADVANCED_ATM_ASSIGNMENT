function atmOperation(){ 
    let ussd = "*770#";
        let pin = 5555;
        const ussdVerify = document.querySelector('#pin').value
        while (ussdVerify === ussd) {
            let option = Number(prompt(`Welcome to First Bank
            1.> Balance Enquiry
            2.> Transfer money 
            3.> Airtime
            4.> Buy Data
            5.> Pay Bills
            6.> Enquiry Service
            0.> Exit  
            `))

            //Option 1 (Check Balance)
            if (option === 1) {
                let accountType = Number(prompt("Select your Account \n 1> 30XXXXX006 \n 2> 31XXXXX006"));

                // Implementation of switch statement.

                switch (true) {
                case (accountType === 1):
                    alert(" Retrieving Balance ... An SMS will be sent to you shortly");
                break;
                case (accountType === 2):
                    alert(" Retrieving Balance ... An SMS will be sent to you shortly");
                break;
                default:
                    alert("Error. select a valid option");
                break;
            }
            }
            //-------------------------------------------------
            //Option 2 (Transfer)
            if (option === 2) {
                let accountNumber = Number(prompt("Enter Account Number"));
                let selectBank = Number(prompt("Select Bank \n 1.> Fidelity Bank \n2.> UBA Bank \n3.> WEMA"));
                if (selectBank === 1) {
                    let amount = Number(prompt("Enter Amount"));

                    let pinCheck = Number(prompt("Enter Pin"));
                    if (pinUpdate(pinCheck,pin)) {
                        alert(`You have Successfully Transferred #${amount}.00 to ${accountNumber}`);
                    }
                    else {
                        alert("Wrong Pin");
                    }
                }
                else if (selectBank === 2) {
                    let amount = Number(prompt("Enter Amount"));

                    let pinCheck = Number(prompt("Enter Pin"));
                    if (pinUpdate(pinCheck,pin)) {
                        alert(`You have Successfully Transferred #${amount}.00 to ${accountNumber}`);
                    }
                    else {
                        alert("Wrong Pin");
                    }
                }
                else if (selectBank === 3) {
                    let amount = Number(prompt("Enter Amount"));

                    let pinCheck = Number(prompt("Enter Pin"));
                    if (pinUpdate(pinCheck,pin)) {
                        alert(`You have Successfully Transferred #${amount}.00 to ${accountNumber}`);
                    }
                    else {
                        alert("Wrong Pin");
                    }
                }
                else {
                    alert("Error. select a valid option");
                }
            }
            //------------------------------------------
            // Option 3 (Airtime)
            if (option === 3) {
                let airtimeType = Number(prompt(" 1.> Self\n 2.> Others"));
                //airtime to self
                switch(true){ 
                case(airtimeType === 1):
                    let amount = Number(prompt("Enter Amount"));
                    alert(`You sent #${amount}.00 to your line`);
                break;
                //airtime to others
                case(airtimeType === 2):
                    let mobileNumber = Number(prompt("Enter Number"));
                    let amountOther = Number(prompt("Enter Amount"));
                    alert(`You sent #${amountOther}.00 to +234${mobileNumber}`);
                break;
                default:
                    alert("Error. select a valid option");
                break;}
            }
            //-------------------------------------------------

        if (option === 0){
            break;
        }
        }
        //If USSD is wrong
        
            alert("Connection Problem or invalid MMI code");
        
    }
    function pinUpdate(p,pin){
        if (p === pin){
            return true;
        }
    }






















