import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, SafeAreaView, Button } from "react-native"
import { ListingStackParamList } from '../navigation/UserStack';

type ListingScreenNavigationProp = StackNavigationProp<
    ListingStackParamList,
    'Listing'
>

type ListingScreenProps = {
    navigation: ListingScreenNavigationProp;
}

function ListingScreen({navigation}: ListingScreenProps) {
    return(
        <SafeAreaView>
            <View>
            <Button
            title="Add Listing"
            onPress={() => navigation.navigate('AddListing')}
            />
            </View>
        </SafeAreaView>
        
    )
}

export default ListingScreen;