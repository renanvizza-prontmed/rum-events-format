import type * as SessionReplay from './generated/mobileSessionReplay.js';
export * from './generated/mobileSessionReplay.js';
export declare const RecordType: {
    FullSnapshot: SessionReplay.MobileFullSnapshotRecord['type'];
    IncrementalSnapshot: SessionReplay.MobileIncrementalSnapshotRecord['type'];
    Meta: SessionReplay.MetaRecord['type'];
    Focus: SessionReplay.FocusRecord['type'];
    ViewEnd: SessionReplay.ViewEndRecord['type'];
    VisualViewport: SessionReplay.VisualViewportRecord['type'];
};
export declare type RecordType = typeof RecordType[keyof typeof RecordType];
export declare const WireframeType: {
    Shape: SessionReplay.ShapeWireframe['type'];
    Text: SessionReplay.TextWireframe['type'];
};
export declare type WireframeType = typeof WireframeType[keyof typeof WireframeType];
export declare const IncrementalSource: {
    Mutation: SessionReplay.MobileMutationData['source'];
};
export declare type IncrementalSource = typeof IncrementalSource[keyof typeof IncrementalSource];