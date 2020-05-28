import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CardWithImage from '../../components/CardWithImage'

const posts = [
  {
    time: '4 days ago',
    title: 'Post One',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#FF6133',
    image: require('../../assets/images/cidade.jpg'),
  },
  {
    time: '1 week ago',
    title: 'Post Two',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#F38D27',
    image: require('../../assets/images/cidade.jpg'),
  },
  {
    time: '4 days ago',
    title: 'Post One',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#07CC57',
    image: require('../../assets/images/cidade.jpg'),
  },
  {
    time: '4 days ago',
    title: 'Post One',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#FF6133',
    image: require('../../assets/images/cidade.jpg'),
  },
  {
    time: '1 week ago',
    title: 'Post Two',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#F38D27',
    image: require('../../assets/images/cidade.jpg'),
  },
  {
    time: '4 days ago',
    title: 'Post One',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam.',
    reads: 4,
    views: 5123,
    comments: 32,
    color: '#07CC57',
    image: require('../../assets/images/cidade.jpg'),
  },
]

const Posts = () => {
  const renderPosts = () => (
    posts.map((post, idx) => (
      <CardWithImage key={idx} {...post}  />
    ))
  )

  return (
    <SafeAreaView>
      <ScrollView>
        {renderPosts()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Posts

const styles = StyleSheet.create({})
