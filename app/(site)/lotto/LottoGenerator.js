'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './lotto.module.css'

const CURRENT_ROUND_KEY = 'lotto-current-round'
const HISTORY_KEY = 'lotto-generation-history'

function generateOneSet() {
  const numbers = new Set()

  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1)
  }

  return Array.from(numbers).sort((a, b) => a - b)
}

function getBallClassName(number) {
  if (number <= 10) return styles.ballYellow
  if (number <= 20) return styles.ballBlue
  if (number <= 30) return styles.ballRed
  if (number <= 40) return styles.ballGray
  return styles.ballGreen
}

function formatDateTime(value) {
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(value))
  } catch {
    return value
  }
}

function compareNumbers(myNumbers, winningNumbers, bonusNumber) {
  const matchedNumbers = myNumbers.filter((number) => winningNumbers.includes(number))
  const matchCount = matchedNumbers.length
  const bonusMatch = myNumbers.includes(bonusNumber)

  let rank = '낙첨'
  if (matchCount === 6) rank = '1등'
  else if (matchCount === 5 && bonusMatch) rank = '2등'
  else if (matchCount === 5) rank = '3등'
  else if (matchCount === 4) rank = '4등'
  else if (matchCount === 3) rank = '5등'

  const detail = matchCount === 5 && bonusMatch ? '5개 일치 + 보너스' : `${matchCount}개 일치`

  return { rank, detail, matchedNumbers, bonusMatch }
}

function NumberBall({ number, small = false, matched = false, bonus = false }) {
  const classNames = [
    styles.ball,
    small ? styles.ballSmall : styles.ballLarge,
    getBallClassName(number),
    matched ? styles.ballMatched : '',
    bonus ? styles.ballBonus : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classNames}>{number}</span>
}

export default function LottoGenerator() {
  const [setCount, setSetCount] = useState(1)
  const [generatedSets, setGeneratedSets] = useState([])
  const [savedRound, setSavedRound] = useState(null)
  const [history, setHistory] = useState([])
  const [winningInputs, setWinningInputs] = useState(Array(6).fill(''))
  const [bonusInput, setBonusInput] = useState('')
  const [checkError, setCheckError] = useState('')
  const [saveMessage, setSaveMessage] = useState('')
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    try {
      const storedRound = window.localStorage.getItem(CURRENT_ROUND_KEY)
      const storedHistory = window.localStorage.getItem(HISTORY_KEY)

      if (storedRound) {
        setSavedRound(JSON.parse(storedRound))
      }

      if (storedHistory) {
        setHistory(JSON.parse(storedHistory))
      }
    } catch {}
  }, [])

  const parsedDraw = useMemo(() => {
    if (winningInputs.some((value) => value === '') || bonusInput === '') return null

    const winningNumbers = winningInputs.map((value) => Number(value))
    const bonusNumber = Number(bonusInput)

    if (winningNumbers.some((number) => !Number.isInteger(number) || number < 1 || number > 45)) {
      return null
    }

    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      return null
    }

    if (new Set(winningNumbers).size !== 6) {
      return null
    }

    if (winningNumbers.includes(bonusNumber)) {
      return null
    }

    return {
      winningNumbers,
      winningNumbersSorted: [...winningNumbers].sort((a, b) => a - b),
      bonusNumber,
    }
  }, [winningInputs, bonusInput])

  function updateHistory(nextEntry) {
    setHistory((prev) => {
      const nextHistory = [nextEntry, ...prev].slice(0, 5)

      try {
        window.localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory))
      } catch {}

      return nextHistory
    })
  }

  function handleGenerate() {
    const nextSets = Array.from({ length: setCount }, () => generateOneSet())
    const createdAt = new Date().toISOString()

    setGeneratedSets(nextSets)
    setSaveMessage('')

    updateHistory({
      id: createdAt,
      createdAt,
      sets: nextSets,
    })
  }

  function handleSave() {
    if (generatedSets.length === 0) {
      setSaveMessage('먼저 자동 번호를 생성해 주세요.')
      return
    }

    const nextSavedRound = {
      title: '이번 회차 저장 번호',
      savedAt: new Date().toISOString(),
      sets: generatedSets,
    }

    setSavedRound(nextSavedRound)
    setSaveMessage('현재 번호를 이번 회차 저장 목록에 보관했어요.')

    try {
      window.localStorage.setItem(CURRENT_ROUND_KEY, JSON.stringify(nextSavedRound))
    } catch {}
  }

  function handleWinningNumberChange(index, value) {
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 2)
    setCheckError('')
    setHasChecked(false)

    setWinningInputs((prev) => {
      const next = [...prev]
      next[index] = cleaned
      return next
    })
  }

  function handleBonusChange(value) {
    setCheckError('')
    setHasChecked(false)
    setBonusInput(value.replace(/[^0-9]/g, '').slice(0, 2))
  }

  function handleCheck() {
    setHasChecked(false)

    if (winningInputs.some((value) => value === '') || bonusInput === '') {
      setCheckError('당첨 번호 6개와 보너스 번호를 모두 입력해 주세요.')
      return
    }

    const numbers = winningInputs.map((value) => Number(value))
    const bonusNumber = Number(bonusInput)

    if (numbers.some((number) => !Number.isInteger(number) || number < 1 || number > 45)) {
      setCheckError('당첨 번호는 1부터 45 사이 숫자로 입력해 주세요.')
      return
    }

    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      setCheckError('보너스 번호는 1부터 45 사이 숫자로 입력해 주세요.')
      return
    }

    if (new Set(numbers).size !== 6) {
      setCheckError('당첨 번호 6개는 서로 다른 숫자여야 합니다.')
      return
    }

    if (numbers.includes(bonusNumber)) {
      setCheckError('보너스 번호는 당첨 번호와 중복될 수 없습니다.')
      return
    }

    setCheckError('')
    setHasChecked(true)
  }

  function renderSetList(title, sets, metaText) {
    return (
      <section className={styles.generatorPanel}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.panelTitle}>{title}</p>
            {metaText ? <p className={styles.panelMeta}>{metaText}</p> : null}
          </div>
        </div>

        <div className={styles.setList}>
          {sets.map((set, index) => {
            const comparison =
              hasChecked && parsedDraw
                ? compareNumbers(set, parsedDraw.winningNumbers, parsedDraw.bonusNumber)
                : null
            const matchedSet = new Set(comparison?.matchedNumbers ?? [])
            const isWinner = comparison && comparison.rank !== '낙첨'

            return (
              <article
                key={`${title}-${index}-${set.join('-')}`}
                className={`${styles.setCard} ${isWinner ? styles.setCardWinner : ''}`}
              >
                <div className={styles.setHeader}>
                  <div>
                    <p className={styles.setTitle}>{index + 1}세트</p>
                    <p className={styles.setMeta}>{set.join(' · ')}</p>
                  </div>

                  {comparison ? (
                    <span
                      className={`${styles.rankBadge} ${
                        comparison.rank === '낙첨' ? styles.rankBadgeLose : styles.rankBadgeWin
                      }`}
                    >
                      {comparison.detail} · {comparison.rank}
                    </span>
                  ) : null}
                </div>

                <div className={styles.ballRow}>
                  {set.map((number) => (
                    <NumberBall
                      key={`${title}-${index}-${number}`}
                      number={number}
                      matched={matchedSet.has(number)}
                      bonus={Boolean(comparison?.bonusMatch && number === parsedDraw?.bonusNumber)}
                    />
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <div className={styles.generator}>
      <div className={styles.controlGrid}>
        <div className={styles.field}>
          <label className={styles.label}>생성 세트 수</label>
          <select
            value={setCount}
            onChange={(event) => setSetCount(Number(event.target.value))}
            className={styles.select}
          >
            {[1, 2, 3, 4, 5].map((count) => (
              <option key={count} value={count}>
                {count}세트
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>생성 방식</label>
          <div className={styles.infoField}>1부터 45까지 중복 없이 6개를 자동 생성합니다.</div>
        </div>
      </div>

      <button type="button" onClick={handleGenerate} className={styles.primaryButton}>
        자동 번호 생성하기
      </button>

      {generatedSets.length > 0 ? (
        <>
          {renderSetList('이번 생성 번호', generatedSets, `${generatedSets.length}세트 생성 완료`)}

          <button type="button" onClick={handleSave} className={styles.secondaryButton}>
            이번 회차에 저장하기
          </button>
        </>
      ) : (
        <div className={styles.emptyState}>
          아직 생성된 번호가 없습니다. 세트 수를 선택한 뒤 자동 번호 생성 버튼을 눌러 주세요.
        </div>
      )}

      {saveMessage ? (
        <p
          className={`${styles.feedbackMessage} ${
            saveMessage.includes('먼저') ? styles.feedbackWarning : styles.feedbackSuccess
          }`}
        >
          {saveMessage}
        </p>
      ) : null}

      {savedRound ? (
        renderSetList(savedRound.title, savedRound.sets, `${formatDateTime(savedRound.savedAt)} 저장`)
      ) : (
        <section className={styles.generatorPanel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>이번 회차 저장 번호</p>
              <p className={styles.panelMeta}>저장 전 상태</p>
            </div>
          </div>
          <p className={styles.panelText}>생성한 번호를 저장하면 현재 브라우저에 이번 회차 번호로 보관됩니다.</p>
        </section>
      )}

      <section className={styles.generatorPanel}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.panelTitle}>당첨 번호 확인</p>
            <p className={styles.panelMeta}>당첨 번호 6개 + 보너스 번호 입력</p>
          </div>
        </div>

        <div className={styles.inputGrid}>
          {winningInputs.map((value, index) => (
            <div key={`winning-${index}`} className={styles.field}>
              <label className={styles.label}>당첨 번호 {index + 1}</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder={`${index + 1}번`}
                value={value}
                onChange={(event) => handleWinningNumberChange(index, event.target.value)}
                className={styles.input}
              />
            </div>
          ))}

          <div className={styles.field}>
            <label className={styles.label}>보너스 번호</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="보너스"
              value={bonusInput}
              onChange={(event) => handleBonusChange(event.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        {parsedDraw ? (
          <div className={styles.winningPreview}>
            <p className={styles.previewLabel}>입력된 당첨 번호</p>
            <div className={styles.previewBalls}>
              {parsedDraw.winningNumbersSorted.map((number) => (
                <NumberBall key={`preview-${number}`} number={number} />
              ))}
              <div className={styles.bonusPreview}>
                <span className={styles.bonusChip}>B</span>
                <NumberBall number={parsedDraw.bonusNumber} bonus />
              </div>
            </div>
          </div>
        ) : null}

        {checkError ? <p className={`${styles.feedbackMessage} ${styles.feedbackWarning}`}>{checkError}</p> : null}

        <button type="button" onClick={handleCheck} className={styles.secondaryButton}>
          내 번호 등수 확인하기
        </button>

        <p className={styles.helperText}>
          1등은 6개 일치, 2등은 5개 일치와 보너스 번호 일치, 3등은 5개 일치, 4등은 4개 일치, 5등은 3개 일치 기준입니다.
        </p>
      </section>

      <section className={styles.generatorPanel}>
        <div className={styles.panelHeader}>
          <div>
            <p className={styles.panelTitle}>최근 5회 생성 기록</p>
            <p className={styles.panelMeta}>최근 자동 생성한 조합 모음</p>
          </div>
        </div>

        {history.length === 0 ? (
          <p className={styles.panelText}>아직 생성 기록이 없습니다.</p>
        ) : (
          <div className={styles.historyList}>
            {history.map((entry, entryIndex) => (
              <article key={entry.id} className={styles.historyCard}>
                <div className={styles.historyHeader}>
                  <p className={styles.historyTitle}>{entryIndex + 1}번째 최근 생성</p>
                  <p className={styles.historyMeta}>{formatDateTime(entry.createdAt)}</p>
                </div>

                <div className={styles.historySetList}>
                  {entry.sets.map((set, setIndex) => (
                    <div key={`${entry.id}-${setIndex}`} className={styles.historySetRow}>
                      <span className={styles.historySetLabel}>{setIndex + 1}세트</span>
                      <div className={styles.historyBalls}>
                        {set.map((number) => (
                          <NumberBall key={`${entry.id}-${setIndex}-${number}`} number={number} small />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
