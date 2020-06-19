import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textInfo: {
    color: 'purple',
  },
  textTitle: {
    color: 'purple',
    fontWeight: 'bold',
  },
});

class FeaturedFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      director: '',
      releaseDate: '',
      rtScore: '',
      title: '',
    };
  }

  componentDidMount = () => {
    this.fetchFilm(`${this.props.item.url}`);
  };

  fetchFilm = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) =>
        this.setState({
          description: resp.description,
          director: resp.director,
          releaseDate: resp.release_date,
          rtScore: resp.rt_score,
          title: resp.title,
        })
      );
  };

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.fetchFilm(`${this.props.item.url}`);
    }
  }

  render() {
    const { description, director, releaseDate, rtScore, title } = this.state;
    return (
      <View style={{ alignItems: 'center', padding: 15 }}>
        <Text style={styles.textTitle}>Title:</Text>
        <Text style={styles.textInfo}> {title} </Text>
        <Text style={styles.textTitle}>Director:</Text>
        <Text style={styles.textInfo}> {director}</Text>
        <Text style={styles.textTitle}>Description:</Text>
        <Text style={styles.textInfo}> {description}</Text>
        <Text style={styles.textTitle}>Release Date:</Text>
        <Text style={styles.textInfo}> {releaseDate}</Text>
        <Text style={styles.textTitle}>Rotton Tomato Score:</Text>
        <Text style={styles.textInfo}> {rtScore}</Text>
      </View>
    );
  }
}

export default FeaturedFilm;
