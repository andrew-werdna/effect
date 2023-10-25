import * as Duration from "effect/Duration"

// -------------------------------------------------------------------------------------
// decode
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.decode(100)
// $ExpectType Duration
Duration.decode(10n)
// $ExpectType Duration
Duration.decode("10 nanos")
// $ExpectType Duration
Duration.decode("10 micros")
// $ExpectType Duration
Duration.decode("10 millis")
// $ExpectType Duration
Duration.decode("10 seconds")
// $ExpectType Duration
Duration.decode("10 minutes")
// $ExpectType Duration
Duration.decode("10 hours")
// $ExpectType Duration
Duration.decode("10 days")
// $ExpectType Duration
Duration.decode("10 nanos")

// @ts-expect-error
Duration.decode("10 unknown")

// -------------------------------------------------------------------------------------
// toMillis
// -------------------------------------------------------------------------------------

// $ExpectType number
Duration.toMillis("1 millis")

// -------------------------------------------------------------------------------------
// toNanos
// -------------------------------------------------------------------------------------

// $ExpectType Option<bigint>
Duration.toNanos("1 millis")

// -------------------------------------------------------------------------------------
// toNanos
// -------------------------------------------------------------------------------------

// $ExpectType bigint
Duration.unsafeToNanos("1 millis")

// -------------------------------------------------------------------------------------
// toHrTime
// -------------------------------------------------------------------------------------

// $ExpectType readonly [seconds: number, nanos: number]
Duration.toHrTime("1 millis")

// -------------------------------------------------------------------------------------
// match
// -------------------------------------------------------------------------------------

// $ExpectType string
Duration.match("100 millis", {
  onMillis: () => "millis",
  onNanos: () => "nanos"
})

// -------------------------------------------------------------------------------------
// between
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.between("1 minutes", "59 seconds", "61 seconds")

// -------------------------------------------------------------------------------------
// min
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.min("1 minutes", "2 millis")

// -------------------------------------------------------------------------------------
// max
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.max("1 minutes", "2 millis")

// -------------------------------------------------------------------------------------
// clamp
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.clamp("1 millis", "2 millis", "3 millis")

// -------------------------------------------------------------------------------------
// times
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.times("1 seconds", 60)

// -------------------------------------------------------------------------------------
// sum
// -------------------------------------------------------------------------------------

// $ExpectType Duration
Duration.sum("30 seconds", "30 seconds")

// -------------------------------------------------------------------------------------
// greaterThanOrEqualTo
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.greaterThanOrEqualTo("2 seconds", "2 seconds")

// -------------------------------------------------------------------------------------
// greaterThan
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.greaterThan("2 seconds", "2 seconds")

// -------------------------------------------------------------------------------------
// lessThanOrEqualTo
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.lessThanOrEqualTo("2 seconds", "2 seconds")

// -------------------------------------------------------------------------------------
// lessThan
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.lessThan("2 seconds", "2 seconds")

// -------------------------------------------------------------------------------------
// equals
// -------------------------------------------------------------------------------------

// $ExpectType boolean
Duration.equals("2 seconds", "2 seconds")