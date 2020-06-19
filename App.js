import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import FeaturedFilm from './components/FeaturedFilm';
import Films from './components/Films';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    paddingBottom: 80,
  },
  titleText: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: 'teal',
    textDecorationLine: 'underline',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredFilm: '',
      films: [],
    };
  }

  componentDidMount() {
    const films = [];
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((result) => {
        result.map((f) => {
          let film = { title: f.title, url: f.url };
          films.push(film);
        });
        this.setState({ films: films });
      });
  }

  findFilm = (searchTerm) => {
    return this.state.films.find((film) => {
      if (film.title) {
        return film.title.toLowerCase() === searchTerm.toLowerCase();
      } else if (film.name) {
        return film.name.toLowerCase() === searchTerm.toLowerCase();
      }
    });
  };

  handleClick = (title) => {
    let film = this.findFilm(title);
    this.setState({ featuredFilm: film });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Ghibli-Mazing!</Text>
          <Text style={styles.titleText}>Enjoy the world of Studio Ghibli</Text>
          {this.state.featuredFilm !== '' ? (
            <FeaturedFilm
              films={this.state.films}
              item={this.state.featuredFilm}
            />
          ) : (
            <Text style={{ fontSize: 18 }}>
              Click a list item to see more...
            </Text>
          )}
          <View style={styles.container}>
            <Text style={styles.text}>From Studio Ghibli</Text>
            <Films handleClick={this.handleClick} items={this.state.films} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

