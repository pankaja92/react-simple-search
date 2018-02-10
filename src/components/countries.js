import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
//
import '../App.css';

class Countries extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchCountry : '',
      tempCountries : [],
      countryNames : ["Carmelina Mistretta",
      'Shaun Dartez',
      'Shonta Lauer',
      'Trish Merrigan',
      'Jolie Gardner',
      'Garland Hernadez',
      'Bo Stodola',
      'Angel Lant',
      'Alphonso Lefort',
      'Clement Metzler',
      'Vanna Gouveia',
      'Maxima Hancock',
      'Bill Lesure',
      'Clifton Rabideau',
      'Pasty Marty',
      'Pansy Siders',
      'Dorine Ploof',
      'Elfreda Emert',
      'Siu Dunkel',
      'Gala Oyola',
      'Magdalen Chestnut',
      'Lorinda Buchheit',
      'Kimberlee Millet',
      'Magan Schwindt',
      'Otelia Mcelravy',
      'Holly Riser',
      'Mariella Breneman',
      'Trina Bayne',
      'Autumn Boltz',
      'Melody Schiavone',
      'Tonita Ashton',
      'Carroll Tomson',
      'Belinda Igoe',
      'Teri Roache',
      'Isis Lugar',
      'Theodore Barrows',
      'Wanita Bussell',
      'Fatimah Trudel',
      'Xiao Lomeli',
      'Syreeta Brothers',
      'Cameron Heyd',
      'Columbus Carithers',
      'Hiedi Amis',
      'Carleen Troxler',
      'Lizzie Coltharp',
      'Jacquie Tatman',
      'Huey Kubala',
      'Emma Winfield',
      'Hildred Hackworth',
      'Wm Janus'],
      tempCountyList : ["Carmelina Mistretta",
      'Shaun Dartez',
      'Shonta Lauer',
      'Trish Merrigan',
      'Jolie Gardner',
      'Garland Hernadez',
      'Bo Stodola',
      'Angel Lant',
      'Alphonso Lefort',
      'Clement Metzler',
      'Vanna Gouveia',
      'Maxima Hancock',
      'Bill Lesure',
      'Clifton Rabideau',
      'Pasty Marty',
      'Pansy Siders',
      'Dorine Ploof',
      'Elfreda Emert',
      'Siu Dunkel',
      'Gala Oyola',
      'Magdalen Chestnut',
      'Lorinda Buchheit',
      'Kimberlee Millet',
      'Magan Schwindt',
      'Otelia Mcelravy',
      'Holly Riser',
      'Mariella Breneman',
      'Trina Bayne',
      'Autumn Boltz',
      'Melody Schiavone',
      'Tonita Ashton',
      'Carroll Tomson',
      'Belinda Igoe',
      'Teri Roache',
      'Isis Lugar',
      'Theodore Barrows',
      'Wanita Bussell',
      'Fatimah Trudel',
      'Xiao Lomeli',
      'Syreeta Brothers',
      'Cameron Heyd',
      'Columbus Carithers',
      'Hiedi Amis',
      'Carleen Troxler',
      'Lizzie Coltharp',
      'Jacquie Tatman',
      'Huey Kubala',
      'Emma Winfield',
      'Hildred Hackworth',
      'Wm Janus']
    };
  };

  componentWillMount(){
    this.setState({tempCountries : this.state.countryNames})
  }

  componentWillReceiveProps(nextprops){
    console.log(nextprops.searchValue);
    var countryName = nextprops.searchValue.toLowerCase();
    var temp = [];
    for(var i=0; i <this.state.tempCountries.length; i++){
      if (this.state.tempCountries[i].toLowerCase().includes(countryName)){
          temp.push(this.state.tempCountries[i]);
        };
      }
    this.setState({ countryNames : temp });
  }

  render(){
    return (
      <div className='name-list'>
        <ListGroup>
          {this.state.countryNames.map((country) => (
            <ListGroupItem key={this.state.countryNames.indexOf(country)}> {country}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
};

export default Countries;
