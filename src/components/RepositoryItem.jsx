import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    outerContainer: {
        padding: 20,
        backgroundColor: 'white'
    },
    imageBox: {
        width: 45,
        height: 45,
        borderRadius: 5
    },
    topRow: {
        flexDirection: 'row'
    },
    titleDescLang: {
        paddingLeft: 10,
        flex: 1
    },
    descBox: {
        marginBottom: 4
    },
    languageBox: {
        display: 'inline',
        marginTop: 5
    },
    languageText: {
        color: 'white',
        backgroundColor: '#0366d6',
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingTop: 2,
        paddingBottom: 3
        
    },
    numberText: {
        fontWeight: 'bold',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 15
    },
    bottomRowBox: {
        flex: 1,
        alignItems: 'center'
    }
})

const RepositoryItem = ({ repository }) => {

    const toKConverter = (toConvert) => {
        if (toConvert >= 1000) {
            return `${Math.round(toConvert/100)/10}k`
        }
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.topRow}>
                <Image
                    style={styles.imageBox}
                    source={{ uri: repository.ownerAvatarUrl }}
                />
                <View style={styles.titleDescLang}>
                    <View style={styles.descBox}>
                        <Text style={styles.numberText}>{repository.fullName}</Text>
                    </View>
                    <View style={styles.descBox}>
                        <Text>{repository.description}</Text>
                    </View>
                    <View  style={styles.languageBox}>
                        <Text style={styles.languageText}>{repository.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.bottomRowBox}>
                    <View>
                        <Text style={styles.numberText}>{toKConverter(repository.stargazersCount)}</Text>
                    </View>
                    <Text>Stars</Text>
                </View>
                <View style={styles.bottomRowBox}>
                    <Text style={styles.numberText}>{toKConverter(repository.forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.bottomRowBox}>
                    <Text style={styles.numberText}>{repository.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.bottomRowBox}>
                    <Text style={styles.numberText}>{repository.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem