import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, YStack } from '@my/ui'

import ItemSelect from "../../components/ItemSelect"

import { SafeAreaView } from 'react-native-safe-area-context'
import getItems from 'apps/expo/API/getItems';
import { useSQLiteContext } from 'expo-sqlite'

import { Plus } from '@tamagui/lucide-icons'
import { useLink } from 'solito/navigation'

const Home = () => {
  const [items, setItems] = useState([]);
  const db = useSQLiteContext();
  const linkProps = useLink({
    href: '/add'
  })
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response: any = await getItems(db)
        setItems(response)
      }
      catch (error) {
        console.error('ERROR FETCHING DATA:', error);
        throw error;
      }
    }
    fetchItems()
  }, [])

  return (
    <YStack f={1} gap="$8" p="$4" bg="$background" height={"100%"}>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={(item) => <ItemSelect item={item["item"]} />}
        />
          
      </SafeAreaView>

      <Button
        size="$6"
        circular
        icon={Plus}
        {...linkProps}
        position='absolute'
        bottom="$4"
        right="$2"
      />
    </YStack>
  )
}

export default Home