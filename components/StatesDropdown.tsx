import React from 'react'
import { FormField, FormLabel } from './ui/form'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { usStates } from '@/constants'

const formSchema = authFormSchema('sign-up')

interface StatesDropdownProps {
  control: Control<z.infer<typeof formSchema>>
}

const StatesDropdown = ({ control }: StatesDropdownProps) => {
  return (
    <FormField
      control={control}
      name="state"
      render={({ field }) => (
        <div className="form-item w-[250px] md:w-[200px]">
          <FormLabel className="form-label">State</FormLabel>
          <div className="flex w-full flex-col md:w-[200px]">
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              autoComplete="address-level-1"
            >
              <SelectTrigger className="input-class flex w-full gap-3 md:w-[200px]">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent
                className="w-full bg-white md:w-[400px]"
                align="end"
              >
                <SelectGroup>
                  <SelectLabel className="py-2 font-normal text-gray-500">
                    States
                  </SelectLabel>
                  {usStates.map((state: string) => (
                    <SelectItem
                      key={state}
                      value={state}
                      className="cursor-pointer border-t"
                    >
                      {state}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    />
  )
}

export default StatesDropdown
