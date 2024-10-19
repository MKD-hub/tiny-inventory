import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Spacer, XStack, YStack } from '@my/ui'

import ItemSelect from '../../components/ItemSelect'

import { SafeAreaView } from 'react-native-safe-area-context'
import getItems from '../API/getItems'
import { useSQLiteContext } from 'expo-sqlite'

import { Plus, Search } from '@tamagui/lucide-icons'
import { useLink } from 'solito/navigation'

import useStore from '../API/store'

const Home = () => {
  const [items, setItems] = useState([])
  const db = useSQLiteContext()
  const linkProps = useLink({
    href: '/add',
  })
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response: any = await getItems(db)
        setItems(response)
      } catch (error) {
        console.error('ERROR FETCHING DATA:', error)
        throw error
      }
    }
    fetchItems()
  }, [])

  const bears = useStore((state) => state.bears)
  console.log(bears)
  return (
    <>
      <YStack f={1} gap="$8" p="$4" bg="$background">
        <SafeAreaView>
          {/* <XStack
            width={'$20'}
            f={1}
            marginBottom={'$8'}
          >
            <Input
              placeholder='search here...' 
              size={'$4'}
            />

            <Spacer />
            
            <Button>
              <Search />
            </Button>
          </XStack> */}

          <FlatList data={items} renderItem={(item) => <ItemSelect item={item['item']} />} />
        </SafeAreaView>

      </YStack>
    </>
  )
}

export default Home
