import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';

export default function First({ page, setPage, formData, setFormData }) {

    return (
        <>
            {/* <form 
            className='center'
            >
                <div 
                  className='centerr'
                >Account_Transaction_ID:
                    <FormInput
                       
                        placeholderText={'Account_Transaction_ID'}
                        value={formData.AccountTransactionID}
                        onChange={(e) => setFormData({ ...formData, AccountTransactionID: e.target.value })}
                    />
                </div>

                <div  className='centerr'>Transaction_ID:
                    <FormInput
                    
                        placeholderText={'Transaction_ID'}
                        value={formData.TransactionID}
                        onChange={(e) => setFormData({ ...formData, TransactionID: e.target.value })}
                    />
                </div>

                <div className='centerr'>Transaction_Amount:
                    <FormInput
                    
                        placeholderText={'Transaction_Amount'}
                        value={formData.TransactionAmount}
                        onChange={(e) => setFormData({ ...formData, TransactionAmount: e.target.value })}
                    />
                </div>

                <div  className='centerr'>Linked_Account_ID:
                    <FormInput
                    
                        placeholderText={'Linked_Account_ID'}
                        value={formData.LinkedAccountID}
                        onChange={(e) => setFormData({ ...formData, LinkedAccountID: e.target.value })}
                    />
                </div>

                <FormButton
                    style={{ marginLeft: 400 }}
                    className='btn btn-primary nextBtn'
                    buttonText={'Next'}
                    onClick={() => {
                        setFormData({ ...formData, AccountTransactionID: Number(formData.AccountTransactionID), TransactionAmount: Number(formData.TransactionAmount), LinkedAccountID: Number(formData.LinkedAccountID) });
                        setPage(page + 1);
                    }}
                />
            </form>
 */}
  <div className="container">
    
          <form>
            <label for="fname">Third Name</label>
            <input className="inp" name="firstname" placeholder="Your name.." />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">Email</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Your email.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">PassWord</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your password.."
            />
            <div>
              <label for="lname"></label>
            </div>
            <label for="lname">MobileNo</label>
            <input
              className="inp"
              id="lname"
              name="lastname"
              placeholder="Enter your mobile no..."
            />
            <div>
              <label for="lname"></label>
            </div>
            <div style={{ margin: "auto", width: "100px" }}>
              <button >
                Send
              </button>
            </div>
          </form>
        </div>
    


        </>
    )
}
