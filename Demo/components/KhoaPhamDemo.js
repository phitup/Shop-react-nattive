import React , {Component} from 'React';
import {
  ListView , View , Text ,Image ,RefreshControl ,TouchableOpacity
} from 'react-native';

export default class KhoaPhamDemo extends Component {

  constructor(props){
    super(props);
    this.state={
      refreshing: false,
      trang:0,
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }

  loadNewData(){

    this.setState({
      refreshing:true ,
      trang: this.state.trang + 1
    });
    fetch("http://192.168.1.2/WebService/vd1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responsejson)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responsejson),
        refreshing:false ,
      });
    })
    .catch((error)=>{
      alert(error);
    });
  }

  render(){
    return(
      <ListView
        refreshControl={
          <RefreshControl
            refreshing = {this.state.refreshing}
            onRefresh = {this.loadNewData.bind(this)}
          />
        }
        dataSource={this.state.dataSource}
        renderRow={(r)=>
          <TouchableOpacity>
          <View style={{padding:20 , borderWidth:1}}>
            <Image source={{uri:r.Hinh}} style={{width:100 , height:100}}/>
            <Text>{r.Id}</Text>
          </View>
          </TouchableOpacity>
        }
      />
    );
  }

  componentDidMount(){

    fetch("http://192.168.1.2/WebService/vd1.php?trang=" + this.state.trang)
    .then((response)=>response.json())
    .then((responsejson)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responsejson),
        trang: this.state.trang + 1
      });
    })
    .catch((error)=>{
      alert(error);
    });
  }

}
