import type * as SessionReplay from '../generated/mobileSessionReplay'

export * from '../generated/mobileSessionReplay'

export const RecordType: {
  FullSnapshot: SessionReplay.MobileFullSnapshotRecord['type']
  IncrementalSnapshot: SessionReplay.MobileIncrementalSnapshotRecord['type']
  Meta: SessionReplay.MetaRecord['type']
  Focus: SessionReplay.FocusRecord['type']
  ViewEnd: SessionReplay.ViewEndRecord['type']
  VisualViewport: SessionReplay.VisualViewportRecord['type']
} = {
  FullSnapshot: 10,
  IncrementalSnapshot: 11,
  Meta: 4,
  Focus: 6,
  ViewEnd: 7,
  VisualViewport: 8,
} as const

export type RecordType = typeof RecordType[keyof typeof RecordType]

export const WireframeType: {
  Shape: SessionReplay.ShapeWireframe['type']
  Text: SessionReplay.TextWireframe['type']
} = {
  Shape: 'shape',
  Text: 'text',
} as const

export type WireframeType = typeof WireframeType[keyof typeof WireframeType]

export const IncrementalSource: {
  Mutation: SessionReplay.MobileMutationData['source']
} = {
  Mutation: 0,
} as const

export type IncrementalSource = typeof IncrementalSource[keyof typeof IncrementalSource]