
import FormTextField from '@/Components/FormTextField.js'
import FormActionButton from '@/Components/FormActionButton.js'

export default function adminSignUpForm()
{
    return(
        <>
        <div className="MainSignUp">

        <div className="AdminLeftSideSignUp"></div>

        <div className="AdminRightSideSignup">
        <FormTextField label = "UserName"/>
        <FormTextField label = "Full Name"/>
        <FormTextField label = "Password"/>
        <FormTextField label = "Email Address"/>
        <FormTextField label = "Age"/>
        <FormActionButton buttonName = "SignUp"/>
        </div>
        
        </div>
        

        </>
    );
}