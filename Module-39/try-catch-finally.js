const checkAge = () =>{
    const ageFiled = document.getElementById('age-field');
    const ageText = ageFiled.value;
    age = parseInt(ageText)
    const errorFiled = document.getElementById('error');
    try{
        if(isNaN(age)){
            throw 'Please Enter Your Age'
        }
        if(age<18){
            throw 'You are small'
        }
        else if(age>30){
            throw 'You are Bura'
        }
        errorFiled.innerHTML = ''
    }
    catch(err){
        
        errorFiled.innerHTML = `
         ${err}
        `
    }
    finally{
        console.log('Noman')
    }
}