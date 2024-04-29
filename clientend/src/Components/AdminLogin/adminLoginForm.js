import FormTextField from "@/Components/FormTextField.js"
import FormActionButton from "@/Components/FormActionButton.js"
export default function adminLoginForm()
{
    return(
 <>
    <div className="MainLogin">

     <div className="AdminLeftSideLogin"></div>
        <div className="AdminRightSideLogin">
            <FormTextField label = "UserName"/>
            <FormTextField label = "Password"/>
            <FormActionButton buttonName = "Login"/>
         </div>
     </div>
</>
    )
}