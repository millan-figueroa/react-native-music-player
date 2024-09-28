import library from "@/assets/data/library.json"
import { FlatList } from 'react-native'
import { TrackListItem } from './TrackListItem'

export const TrackList = () => {
    return (
        <FlatList 
            data={library} 
            renderItem={({ item: track}) => (
                <TrackListItem
                    track={{
                        ...track,
                        image: track.artwork,
                    }}
                />
            )}
        />    
    )
}