import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Caixa from './Caixa'

const Corpo = props =>{
    return(
        <ScrollView>
        <View style={styles.container}>

        <View style={styles.top}>

            <Text style ={styles.titulo}>{props.titulo}</Text>

            <Image source = {props.console} style={styles.imgConsole} resizeMode="Cover"/>

            <Text>
                {props.historia}
            </Text>

        </View>
        {
            props.data.map((e, i) => {
                return(
                    <caixa
                            key={i}    
                            titulo={e.titulo}  
                            descricao={e.descricao}
                            data={e.dataEsp ?? false}
                            color={props.color}
                        />
                    )
                })
            }
            </View>
        </ScrollView>
      );
    }
                
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        },
        top: {
            alignItems: 'center',
            justifyContent: 'center',
            gap: 35
        },
        titulo: {
            fontSize: 17,
            fontWeight: 700
        },
        imgConsole: {
          width: 250,
          height: 150
        }
      });
      
    
    export default Corpo;