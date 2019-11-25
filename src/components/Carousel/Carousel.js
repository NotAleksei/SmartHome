import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, Image } from 'react-native';




class  Carousel extends React.Component{
 
  componentDidMount(){
    let height = Dimensions.get('window').height;
    let itemHeight = height/3.68
    let itemWidth = itemHeight*1.07
    setTimeout(() => {
      this.snapScroll.scrollTo({x: itemWidth-itemWidth/2+30});
  }, 1);
  }

render(){
  let height = Dimensions.get('window').height;
  let itemHeight = height/3.68
  let itemWidth = itemHeight*1.07
  return (
    <View style={styles.container}>
        <ScrollView 
            ref={(snapScroll) => { this.snapScroll = snapScroll; }}
            horizontal={true} 
            decelerationRate={0}
            onResponderRelease={()=>{
                var interval = itemWidth; 
                var snapTo = (this.scrollingRight)? Math.ceil(this.lastx / interval) : Math.floor(this.lastx / interval);
                var scrollTo = snapTo * interval;
                this.snapScroll.scrollTo(0,scrollTo);
            }}
            scrollEventThrottle={32}
            onScroll={(event)=>{
                var nextx = event.nativeEvent.contentOffset.x;
                this.scrollingRight = (nextx > this.lastx);
                this.lastx = nextx;
            }}
            showsHorizontalScrollIndicator={false} 
            style={styles.listViewHorizontal}
        >

                <Image  style={styles.image}  source={require('../../img/carousel/1.png')}></Image>
                <Image  style={styles.image}  source={require('../../img/carousel/2.png')}></Image>
                <Image  style={styles.image}  source={require('../../img/carousel/3.png')}></Image>


        </ScrollView>
    </View>
  );
}
}
;
let height = Dimensions.get('window').height;
let itemHeight = height/3.68
let itemWidth = itemHeight*1.07
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1e29',
    flex: 2.17,
    justifyContent: "center",
    alignItems: 'center'
  },
  image: {
      height: itemHeight,
      width: itemWidth,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
  }
});

export default Carousel
