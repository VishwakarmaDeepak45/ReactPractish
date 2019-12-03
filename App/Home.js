import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-simple-toast';

var self;
export default class Home extends Component {
  constructor(props) {
    super(props);
    self = this;
        this.state = {
            datas: [
                { image: require('./assets/Princedog.png')},
                { image: require('./assets/Princedog.png')},
                { image: require('./assets/Princedog.png')},
                { image: require('./assets/Princedog.png')},
                { image: require('./assets/Princedog.png')},
              ],
              data2 : [
                { image: require('./assets/prince.png')},
                { image: require('./assets/prince.png')},
                { image: require('./assets/prince.png')},
                { image: require('./assets/prince.png')},
                { image: require('./assets/prince.png')},
            ]
        }
    }
    
  loadMore(){
    console.log("On End reach")
    const array1 = self.state.datas;
    const array2 = self.state.data2;
    //map function modify the original array and return the new set of array 
    const map1 = array2.map(x => array1.push(x) );
    //using spread operator we assign the arraydata to firstset of arraydata.
    array1 == [...map1]
    console.log(array1);
   
  }

  renderItem({item, index}) {
    return (
        <View style={{ backgroundColor: 'gray', paddingTop:10, paddingBottom:10, paddingLeft:8, paddingRight:8}}>
          <TouchableOpacity  onPress={()=>{self.props.navigation.navigate('SettingScreen', {uri: item.uri}) }}>
              <TouchableOpacity 
              onPress={()=> Toast.show('Heart Click')}
              style={{ position:'absolute', top:10, zIndex:10, display:'flex', alignItems:'flex-end',right:10}}>
                <Icon name="hearto" size={20} color="#900" />
              </TouchableOpacity>
            <View style={{position:'absolute', bottom:20, left:0, right:0}}>
              <Text style={{fontSize:16, fontWeight:'500', color:'orange', textAlign:'center'}}>Prince</Text>
            </View>
            <View style={{}}>
              <Image style={{width: 135, height: 180, borderRadius:10}} source={item.image}  />
            </View>

            <View style={{position:'absolute', bottom:20, left:0, right:0}}>
              <Text style={{fontSize:16, fontWeight:'500', color:'orange', textAlign:'center'}} numberOfLines={1}>Prince</Text>
              <Text style={{fontSize:12, fontWeight:'500', color:'white', textAlign:'center'}}numberOfLines={2}>Prince text appears here</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }


  render() {
    //Destructuring the data necessary if we use multiple places.
    const{datas} = this.state;
    
    return (
      <View style={{}}> 
         <FlatList
              // shows the data horizontally
              horizontal
              showsHorizontalScrollIndicator={false}
              // inside data we pass the arrayset of datas. 
              data={datas}
              //renderItem is the container of single data.
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              //onEndReached() load the data on the end of first array dataset.
              onEndReached={()=> self.loadMore()}
              //onEndReachedThreshold() wait 0.9 thresold time for last elements
              onEndReachedThreshold={0.9}
          />
      </View>
    )
  }
}

