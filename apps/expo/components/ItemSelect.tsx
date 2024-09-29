import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Card , H2, Paragraph, Spacer, XStack, YStack} from '@my/ui'
import { Trash, RefreshCcw , CircleDollarSign } from '@tamagui/lucide-icons'
import UpdateSheet from "../components/UpdateSheet"
const ItemSelect = (item: any) => {

  const [open, setOpen] = useState(false);
  return (
    <Card
      marginTop="$3"
    >
      <Card.Header padded >
        <H2>Brand: {item["item"]["brand"]}</H2>
      </Card.Header>
      <YStack>
        <XStack>
          <Paragraph>
            Price: {item["item"]["price"]}
          </Paragraph>
          <Spacer />
          <Paragraph>
            Quantity: {item["item"]["quantity"]}
          </Paragraph>
        </XStack>
        <Paragraph>
          Type: {item["item"]["type"]}
        </Paragraph>
        <Paragraph>
          Date added: {item["item"]["date_added"]}
        </Paragraph>
      </YStack>
      <Spacer />
      <Card.Footer>
        <XStack
          ai={"flex-end"}
          gap={"$2"}
          padding={"$2"}
          borderBlockColor={"white"}
        >
          <Button 
            backgroundColor={"skyblue"}
            circular
            size="$2"
            icon={RefreshCcw}
            onPress={() => setOpen(true)}
          />

          <Button
            backgroundColor={'green'}
            circular
            size={'$2'}
            icon={CircleDollarSign}
          />
          
          <Button 
            backgroundColor={"red"}
            circular
            size="$2"
            icon={Trash}
          />

        </XStack>
      </Card.Footer>

      <UpdateSheet
        open={open}
        setOpen={setOpen}
        item={item}
       />
    </Card>
  )
}

export default ItemSelect
