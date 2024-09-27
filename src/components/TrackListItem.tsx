import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';

export type TracklistItemProps = {
    track: { title: string; image?: string, artist?: string }
}

export const TrackListItem = ({ track }: TracklistItemProps) => {
    const isActiveTrack = false

    return (
        <TouchableHighlight>
            <View>
                <FastImage
                    source={{
                                uri: track.image ?? unknownTrackImageUri,
                                priority: FastImage.priority.normal,
                            }}
                    style={{
                                ...styles.trackArtworkImage,
                                opacity: isActiveTrack ? 0.6 : 1,
                            }}
                />
            </View>

            {/* Track title + artist */}
            <View style={{ width: '100%' }}>
                <Text 
                    numberOfLines={1}
                    style={{
                        ...styles.trackTitleText,
                        color: isActiveTrack ? colors.primary : colors.text,
                    }}
                >
                    {track.title}
                </Text>
            </View>     

        </TouchableHighlight>
    )
}



const styles = StyleSheet.create({
    trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
    trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	}
})