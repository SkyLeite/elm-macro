module Input exposing (..)

--# derive(Default)
type alias MyType = {
    foo: String
}

MyTypeDefault : MyType
MyTypeDefault =
    { foo: "" }
