//Module Import
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

//File Imports
import { styleRules } from './styles';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://via.placeholder.com/100x100/FFB6C1/000000"},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://via.placeholder.com/100x100/20B2AA/000000"},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:"https://via.placeholder.com/100x100/7B68EE/000000"},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", attachment:""},
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styleRules.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styleRules.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styleRules.mainContent;
            attachment = <Image style={styleRules.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            <View style={styleRules.container}>
              <Image source={{uri:Notification.image}} style={styleRules.avatar}/>
              <View style={styleRules.content}>
                <View style={mainContentStyle}>
                  <View style={styleRules.text}>
                    <Text style={styleRules.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styleRules.timeAgo}>
                    2 hours ago
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
          );
        }}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Notification;