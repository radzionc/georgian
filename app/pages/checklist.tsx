import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { VStack } from '@reactkit/ui/ui/Stack'
import { ChecklistItem } from '@reactkit/ui/ui/checklist/ChecklistItem'
import { Opener } from '@reactkit/ui/ui/Opener'
import { AddChecklistItemPrompt } from '@reactkit/ui/ui/checklist/AddChecklistItemPrompt'
import { ChecklistItemForm } from '@reactkit/ui/ui/checklist/ChecklistItemForm'
import { updateAtIndex } from '@reactkit/utils/array/updateAtIndex'
import { makeDemoPage } from 'layout/makeDemoPage'

interface Task {
  name: string
  isComplete: boolean
}

const defaultTasks: Task[] = [
  { name: 'Go to the gym', isComplete: false },
  { name: 'Buy groceries', isComplete: false },
  { name: 'Walk the dog', isComplete: false },
]

export default makeDemoPage(() => {
  const [tasks, setTasks] = useState(defaultTasks)

  return (
    <DemoPage youtubeVideoId="kQERG9bauxY" title="Checklist">
      <VStack gap={16}>
        {tasks.map(({ name, isComplete }, index) => (
          <ChecklistItem
            key={index}
            value={isComplete}
            onChange={(value) => {
              setTasks(
                updateAtIndex(tasks, index, (task) => ({
                  ...task,
                  isComplete: value,
                })),
              )
            }}
            name={name}
          />
        ))}
        <Opener
          renderOpener={({ isOpen, onOpen }) =>
            isOpen ? null : (
              <AddChecklistItemPrompt onClick={onOpen}>
                Add task
              </AddChecklistItemPrompt>
            )
          }
          renderContent={({ onClose }) => (
            <ChecklistItemForm
              namePlaceholder="Enter task name"
              onSubmit={({ name }) => {
                setTasks([...tasks, { name, isComplete: false }])
                onClose()
              }}
              onCancel={onClose}
            />
          )}
        />
      </VStack>
    </DemoPage>
  )
})
