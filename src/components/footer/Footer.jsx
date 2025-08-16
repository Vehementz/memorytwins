import React from 'react';
import './Footer.css';
import cerveauhumain from '../../assets/cerveauhumain.png'
import telechargement from '../../assets/telechargement.png'
import inserm from'../../assets/inserm.png'

function Footer(){
    return (
        <div className="Footer">
            <div className="footer_column_container">
            
                <div className="footer_column footer_column_staff">

                    <div className="staffs">
                            <h4> L'équipe</h4>
                            <div className="columns">
                                        <div className="column1">
                                            <a ><img src="https://zupimages.net/up/21/29/e7ml.jpg" width='30px' alt="Christophe" title="Christophe"/> </a>
                                            <a ><img src="https://image.flaticon.com/icons/png/512/1923/1923818.png"width='30px' alt="Benjamin" Title="Benjamin"/> </a>
                                            <a ><img src="https://image.flaticon.com/icons/png/512/817/817757.png" width='30px'alt="Anne-Marie" title="Anne-Marie"/> </a> 
                                        </div>

                                        <div className="column2"> 
                                            <a ><img src="https://zupimages.net/up/21/29/t3o8.png"width='30px' alt="Mathieu" title="Mathieu"/> </a>
                                            <a ><img src="https://zupimages.net/up/21/29/mk6r.png" width='30px'alt="Clément" title="Clément"/> </a> 
                                        
                                        </div>
                            </div>
                    </div>      
                </div>   
                <div className="api">
                        <div className="footer_column footer_column_ref-api">

                            <h4 className="api">Cliniques Mémoire</h4>

                            
                                  <a  className="cerveau" target="_blank" href="https://www.centres-memoire.fr/cartographie-centres-memoire/"><img className="img"src={cerveauhumain} width="60px" alt="cerveau" /></a>
                                 
                        </div>
                </div>

                <div className="inserm">  
                            <div className="inserm">
                                      
                                <div className="footer_column footer_column_inserm">
                                    <h4>Inserm</h4>
                                    <a  target="_blank" href="https://www.inserm.fr/dossier/memoire/"><img className="img_inserm" src={inserm} width='30%'  alt="logo de l'inserm"/></a>
                                   
                               </div>
                           </div>
                </div>  

                <div className="amelie">
                            <div className="footer_column footer_column_amelie">
                                 <h4>Amélie</h4>

                                <div className="CPAM">

                                     <a target="_blank" href="https://www.ameli.fr/loire-atlantique/assure/sante/themes/troubles-memoire/troubles-memoire-causes"><img className="img_footer"src={telechargement} width='30%' alt="logo Am" /></a>
                                        
                                </div>
                            </div>
                </div>

            </div>
        </div>
    

    )}
export default Footer;
