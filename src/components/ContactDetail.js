import React from 'react';
import ContactSection from './ContactSection';
import { TabContent, TabPane, Nav, NavItem, NavLink, Table } from 'reactstrap';
import classnames from 'classnames';

class ContactDetail extends React.Component {
	constructor(props) {
    	super(props);

        this.toggle = this.toggle.bind(this);

    	this.state = {'contact' : {
            'nama' : 'Firhan',
            'email' : 'firhan.faisal1995@gmail.com',
            'angkatan' : '2013',
            'domisili' : 'jakarta',
            'profesi' : 'programmer',
            'riwayat_pekerjaan': [
                {
                    'posisi' : 'Programmer',
                    'perusahaan' : 'DES Net',
                    'lama_bekerja' : '1 tahun',
                    'deskripsi' : 'paragraf untuk deskripsi pekerjaan paragraf untuk deskripsi pekerjaan paragraf untuk deskripsi pekerjaan'
                },
                {
                    'posisi' : 'Programmer',
                    'perusahaan' : 'ICT UNDIP',
                    'lama_bekerja' : '1 tahun',
                    'deskripsi' : 'paragraf untuk deskripsi pekerjaan paragraf untuk deskripsi pekerjaan paragraf untuk deskripsi pekerjaan'
                }
            ]
        }, activeTab: '1'};
  	}

  	toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

   render() {
      return (
         <div className='container section-pad'>
         	<div className='row'>
         		<div className='col-sm-3'>
         			<ContactSection></ContactSection>
         		</div>
         		<div className='col-sm-9 contact-detail' align='left'>
                    <div className='row'>
                        <div className='col-sm-3' align='center'>
                            <img src='/favicon.ico' className='img-fluid' width="100%"/>  
                        </div>
                        <div className='col-sm-9'>
                            <h2>{ this.state.contact.nama }</h2>
                            <div className='email'>
                                { this.state.contact.email }
                            </div>
                            <Nav tabs>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: this.state.activeTab === '1' })}
                                  onClick={() => { this.toggle('1'); }}
                                >
                                  Personal Info
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({ active: this.state.activeTab === '2' })}
                                  onClick={() => { this.toggle('2'); }}
                                >
                                  Jobs History
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                              <TabPane tabId="1">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Angkatan</td>
                                            <td>{ this.state.contact.angkatan }</td>
                                        </tr>
                                        <tr>
                                            <td>Domisili</td>
                                            <td>{ this.state.contact.domisili }</td>
                                        </tr>
                                        <tr>
                                            <td>Profesi</td>
                                            <td>{ this.state.contact.profesi }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                              </TabPane>
                              <TabPane tabId="2">
                                { this.state.contact.riwayat_pekerjaan.map((data)=>
                                    <div className='jobs-history'>
                                        <div className='position'>
                                            { data.posisi }
                                        </div>
                                        <div className='company'>
                                            { data.perusahaan }
                                        </div>
                                        <div className='long'>
                                            { data.lama_bekerja }
                                        </div>
                                        <div className='description'>
                                            { data.deskripsi }
                                        </div>
                                    </div>
                                ) }
                              </TabPane>
                            </TabContent>                           
                        </div>
                    </div>
         		</div>
         	</div>
         </div>
      );
   }
}

export default ContactDetail;