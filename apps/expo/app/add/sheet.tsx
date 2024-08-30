import React, { useState } from 'react'
import { Sheet } from '@tamagui/sheet'
import { Paragraph, XStack, Button } from '@my/ui'
import { type SetStateAction, Dispatch } from 'react'

interface overlayProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CustomOverlay = ({ open, setOpen }: overlayProps) => {
  const [position, setPosition] = useState(0)

  return (
    <Sheet
      modal
      animation="medium"
      open={open}
      onOpenChange={setOpen}
      snapPoints={[80]}
      position={position}
      onPositionChange={setPosition}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle bg="$gray8" />
      <Sheet.Frame ai="center" jc="flex-start" gap="$10" bg="$color2">
        <XStack gap="$2">
          <Paragraph ta="center" fontSize={'$6'} marginTop={'$4'}>
            Add a brand
          </Paragraph>
        </XStack>
      </Sheet.Frame>
    </Sheet>
  )
}

export default CustomOverlay
