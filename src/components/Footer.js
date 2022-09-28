import React from 'react';
import myLogo from './css/images/logo.png';
import {  MDBFooter,  MDBContainer,  MDBIcon,  MDBInput,  MDBCol,  MDBRow,  MDBBtn} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='p-1' style={{backgroundColor:'#343a40',marginLeft:'0px',marginRight:'0px'}}>
      <MDBContainer className='p-8' style={{backgroundColor:'#343a40',marginLeft:'70px',marginTop:'100px'}} >
  

        <section className=''  color='dark' bgColor='dark'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
             
            </MDBRow>
          </form>
        </section>

        <section className='text-light'>
          <p>
          </p>
        </section>

        <section className='' style={{lineHeight:'2rem'}}>
          <MDBRow>
          <MDBCol lg='3' md='6' className='text-light'>
          <h5 className='text-uppercase'>Wander_Wonder</h5>
             <p style={{width:'200px'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </MDBCol>
            <MDBCol lg='3' md='6' className='text-light'>
              <h5 className='text-uppercase'>Information</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/home' className='text-light'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/about' className='text-light'>
                   About Us
                  </a>
                </li>
                <li>
                  <a href='/login' className='text-light'>
                    Login
                  </a>
                </li>
                <li>
                  <a href='/register' className='text-light'>
                    Register
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='text-light'>
              <h5 className='text-uppercase'>Experience</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-light'>
                  Beach 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                  Adventure 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                  Honeymoon 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-light'>
                  Party
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='text-light'>
              <h5 className='text-uppercase'>Have a Questions?</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>Railway Station, Akurdi, Sector 29, Nigdi, Pimpri-Chinchwad, Maharashtra 411044</p>
                </li>
                <li>
                <p>+91 9890219798</p>
                </li>
                <li>
                <p>+91 8806043365</p>
                </li>
                 </ul>
                 <section className='mb-4' bgColor='light'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>
<br/>
    </MDBFooter>
  );
}