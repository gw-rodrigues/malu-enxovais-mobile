import { Button, ButtonGroup, ButtonText } from '@/src/components/ui/button'
import { View } from '@/src/components/ui/view'
import { ComponentType, useState } from 'react'
import { ActivityIndicator } from 'react-native'

type SegmentItem<P extends React.JSX.IntrinsicAttributes> = {
  key: string
  title: string
  component: ComponentType<P>
  props?: P
}

interface SegmentProps<P extends React.JSX.IntrinsicAttributes> {
  items: SegmentItem<P>[]
  defaultKey?: string
}

export function Segment<P extends React.JSX.IntrinsicAttributes>({
  items,
  defaultKey,
}: SegmentProps<P>) {
  const initialKey = defaultKey || items[0]?.key
  const [selected, setSelected] = useState(initialKey)
  const [loadedKeys, setLoadedKeys] = useState(new Set([initialKey]))
  const totalItens = items.length

  const handleSelect = (key: string) => {
    setSelected(key)
    setLoadedKeys((prev) => new Set(prev).add(key))
  }

  return (
    <View className="w-full">
      {/* Botões */}
      <ButtonGroup
        isAttached
        space="sm"
        flexDirection="row"
        className="overflow-hidden border rounded-lg border-primary-500"
      >
        {items.map((item) => (
          <Button
            key={item.key}
            variant={selected === item.key ? 'solid' : 'outline'}
            action={selected === item.key ? 'primary' : 'secondary'}
            onPress={() => handleSelect(item.key)}
            className="flex-1 transition-colors duration-300 border-0 rounded-none"
          >
            <ButtonText>
              {item.title} ({totalItens})
            </ButtonText>
          </Button>
        ))}
      </ButtonGroup>

      <View className="flex-1">
        {items.map((item) => {
          const isLoaded = loadedKeys.has(item.key)
          const isActive = selected === item.key
          const Component = item.component
          return (
            <View
              key={item.key}
              style={{ display: isActive ? 'flex' : 'none' }}
            >
              {isLoaded ? (
                <Component {...(item.props || ({} as P))} />
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ActivityIndicator size="large" color="#ff6600" />
                </View>
              )}
            </View>
          )
        })}
      </View>
    </View>
  )
}
