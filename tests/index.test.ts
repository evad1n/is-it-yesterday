import assert from "node:assert/strict";
import { isItYesterday } from "../src";
import MockDate from "mockdate";

assert(!isItYesterday(), "How is this possible?");

setTimeout(() => {
    // It might be yesterday now so we should check
    assert(!isItYesterday(), "We waited a bit and it was yesterday");

    // Was today yesterday in 1999?
    MockDate.set("1999-12-31T23:59:59.999Z");
    assert(!isItYesterday(), "I guess it was yesterday in 1999");
}, 200);
