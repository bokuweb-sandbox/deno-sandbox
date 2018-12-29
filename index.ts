import {
  test,
  assert,
  assertEqual
} from "https://deno.land/x/testing/testing.ts";
import { color } from "https://deno.land/x/colors/main.ts";
import * as deno from "deno";

const a = {
  b: ["c", "d"],
  d: "hoge"
};

test(function sample() {
  console.log(color.bgBlue.red.bold(JSON.stringify(a)));
  const path = deno.mkdirSync("./dir/subdir");
  assert(true);
  assertEqual(a, "/files-tmb/1234/abc.png");
});
